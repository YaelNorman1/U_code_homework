import pymysql 

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="grocery_store",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)

# if connection.open:
#     print("the connection is opened")

# try:
#     with connection.cursor() as cursor:
#         query = 'CREATE TABLE categories(name VARCHAR(20) NOT NULL PRIMARY KEY)'
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("Error")

# try:
#     with connection.cursor() as cursor:
#         query = 'CREATE TABLE products(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), price INT, category_name VARCHAR(20) FOREIGN KEY REFERENCES categories(name))'
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("Error")

# try:
#     with connection.cursor() as cursor:
#         query = 'INSERT INTO categories VALUES ("meat")'
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("Error")

# with connection.cursor() as cursor:
#     query = "SELECT * FROM products"
#     cursor.execute(query)
#     result = cursor.fetchall()
#     print(result)

# try:
#     with connection.cursor() as cursor:
#         query = 'INSERT INTO products(id, name, price, category_name) VALUES (null, "steak", 5, "meat")'
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("Error")

try:
    with connection.cursor() as cursor:
        query = 'SELECT name FROM products WHERE category_name= "Vegetables"'
        cursor.execute(query)
        result = cursor.fetchall()
        print(result)
except:
    print("Error")