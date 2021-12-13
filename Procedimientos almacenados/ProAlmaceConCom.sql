--6--
go
create procedure Cosulta6
@AverageLeadTime int = 17 as begin
select t1.ProductID,t1.Name,t1.ProductNumber,t1.ListPrice,t2.AverageLeadTime 
from Purchasing.ProductVendor t2 join LS_PRODUCCION.Produccion.Production.Product t1
on t1.ProductID=t2.ProductID
where AverageLeadTime<=@AverageLeadTime
end
--7--
go
create procedure Cosulta7
@DueDate datetime= '24-02-2014' as begin
select t1.ProductID,t1.Name,t1.ProductNumber,t1.ListPrice,t2.DueDate
from Purchasing.PurchaseOrderDetail t2 join LS_PRODUCCION.Produccion.Production.Product t1
on t1.ProductID=t2.ProductID
where DueDate<@DueDate
end
--9--
go
create procedure Cosulta9
@LastReceiptCost money = 40 as begin
select t1.ProductID,t1.Name,t1.ProductNumber,t1.ListPrice,t2.LastReceiptCost
from Purchasing.ProductVendor t2 join LS_PRODUCCION.Produccion.Production.Product t1
on t1.ProductID=t2.ProductID
where LastReceiptCost>@LastReceiptCost
end