using System;
using System.Collections.Generic;

namespace TetGift.DAL.Entities;

public partial class Feedback
{
    public int Feedbackid { get; set; }

    public int? Accountid { get; set; }

    public int? Orderid { get; set; }

    public int? Rating { get; set; }

    public string? Comment { get; set; }

    public bool? Isdeleted { get; set; }

    public virtual Account? Account { get; set; }

    public virtual Order? Order { get; set; }
}
