using System;
using System.Collections.Generic;

namespace TetGift.DAL.Entities;

public partial class Stock
{
    public int Stockid { get; set; }

    public int? Productid { get; set; }

    public int? Stockquantity { get; set; }

    public string? Status { get; set; }

    public DateTime? Lastupdated { get; set; }

    public DateOnly? Productiondate { get; set; }

    public DateOnly? Expirydate { get; set; }

    public virtual Product? Product { get; set; }

    public virtual ICollection<StockMovement> StockMovements { get; set; } = new List<StockMovement>();
}
