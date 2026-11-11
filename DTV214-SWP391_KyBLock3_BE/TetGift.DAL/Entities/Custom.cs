using System;
using System.Collections.Generic;

namespace TetGift.DAL.Entities;

public partial class Custom
{
    public int Customid { get; set; }

    public int? Orderdetailid { get; set; }

    public string? Logourl { get; set; }

    public string? Greetingcardtemplate { get; set; }

    public string? Greetingcardcontent { get; set; }

    public string? Greetingcardcustomurl { get; set; }

    public string? Note { get; set; }

    public virtual OrderDetail? Orderdetail { get; set; }
}
