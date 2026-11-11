using System;
using System.Collections.Generic;

namespace TetGift.DAL.Entities;

public partial class QuotationFee
{
    public int Quotationfeeid { get; set; }

    public int? Quotationitemid { get; set; }

    public decimal? Price { get; set; }

    public string? Description { get; set; }

    public short? Issubtracted { get; set; }

    public virtual QuotationItem? Quotationitem { get; set; }
}
