using System;
using System.Collections.Generic;

namespace TetGift.DAL.Entities;

public partial class Cart
{
    public int Cartid { get; set; }

    public int? Accountid { get; set; }

    public decimal? Totalprice { get; set; }

    public virtual Account? Account { get; set; }

    public virtual ICollection<CartDetail> CartDetails { get; set; } = new List<CartDetail>();
}
