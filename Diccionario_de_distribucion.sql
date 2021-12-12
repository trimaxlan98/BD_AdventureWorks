use Produccion;

CREATE TABLE diccionario_dist (
  id_fragmento tinyint primary key, -- identificador del fragmento
  servidor varchar(100), -- nombre del servidor vinculado
  bd varchar(100), -- nombre de la base que aloja al fragmento
  esquema varchar(100), -- nombre del esquema que fragmento
);

insert into diccionario_dist values (1,'LS_PRODUCCION','Produccion','Produccion');  -- Instancia 1 SQL Server
insert into diccionario_dist values (2,'LS_COMPRAS','Compras','Purchasing'); -- Instancia 2 SQL Server