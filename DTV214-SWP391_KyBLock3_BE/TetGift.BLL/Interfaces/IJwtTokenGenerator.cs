using TetGift.DAL.Entities;

namespace TetGift.BLL.Interfaces
{
    public interface IJwtTokenGenerator
    {
        string Generate(Account acc);
    }
}
