using System;
using System.Collections.Generic;

namespace TetGift.DAL.Entities;

public partial class QuotationItem
{
    public int Quotationitemid { get; set; }

    public int? Quotationid { get; set; }

    public int? Productid { get; set; }

    public int? Quantity { get; set; }

    public decimal? Price { get; set; }

    public virtual Product? Product { get; set; }

    public virtual Quotation? Quotation { get; set; }

    public virtual ICollection<QuotationFee> QuotationFees { get; set; } = new List<QuotationFee>();
}
