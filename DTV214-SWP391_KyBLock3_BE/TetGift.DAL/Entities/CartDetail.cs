using System;
using System.Collections.Generic;

namespace TetGift.DAL.Entities;

public partial class CartDetail
{
    public int Cartdetailid { get; set; }

    public int? Cartid { get; set; }

    public int? Productid { get; set; }

    public int? Quantity { get; set; }

    public virtual Cart? Cart { get; set; }

    public virtual Product? Product { get; set; }
}
