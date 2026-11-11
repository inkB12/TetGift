using System;
using System.Collections.Generic;

namespace TetGift.DAL.Entities;

public partial class StockMovement
{
    public int Stockmovementid { get; set; }

    public int? Stockid { get; set; }

    public int? Orderid { get; set; }

    public int? Quantity { get; set; }

    public DateTime? Movementdate { get; set; }

    public string? Note { get; set; }

    public virtual Order? Order { get; set; }

    public virtual Stock? Stock { get; set; }
}
