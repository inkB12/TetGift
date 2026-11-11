using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TetGift.DAL.Entities;
using TetGift.DAL.Interfaces;

namespace TetGift.BackgroundJobs
{
    public class PendingAccountCleanupService : BackgroundService
    {
        private readonly IServiceScopeFactory _scopeFactory;
        private readonly IConfiguration _cfg;

        public PendingAccountCleanupService(IServiceScopeFactory scopeFactory, IConfiguration cfg)
        {
            _scopeFactory = scopeFactory;
            _cfg = cfg;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            // chạy mỗi 10 phút
            while (!stoppingToken.IsCancellationRequested)
            {
                try
                {
                    using var scope = _scopeFactory.CreateScope();
                    var uow = scope.ServiceProvider.GetRequiredService<IUnitOfWork>();
                    var repo = uow.GetRepository<Account>();

                    var minutes = int.TryParse(_cfg["Otp:DeletePendingAfterMinutes"], out var m) ? m : 30;
                    var cutoff = DateTime.Now.AddMinutes(-minutes);

                    // lấy các account pending quá hạn
                    var stale = await repo.Entities
                        .Where(a => a.Status == "Pending"
                                 && a.RegisterOtpExpiresAt != null
                                 && a.RegisterOtpExpiresAt < cutoff)
                        .ToListAsync(stoppingToken);

                    if (stale.Count > 0)
                    {
                        repo.DeleteRange(stale);
                        await uow.SaveAsync();
                    }
                }
                catch
                {
                    // log nếu bạn muốn, tránh crash background service
                }

                await Task.Delay(TimeSpan.FromMinutes(10), stoppingToken);
            }
        }
    }
}
