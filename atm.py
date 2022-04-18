# ATM ALGORITHMS
import math

# HERE WE ARE CREATING BILLS TO APPEND IN A LIST THAT CONTAINS THE NUMBERS THAT THE USER IS GOINT TO RECEIVE

def bills(v,c):

     bill = {    'valor': v,'cantidad':c }
    
     return bill
# END OF BILLS FUNCTION

# HERE WE ARE CREATING A FUNCTION THAT WIILL ALLOW US TO GIVE THE MONEY TO THE USER 
def entregar_dinero():
     money = int(input('How much money would you like to get?' ))

     for b in cajero:
          if money > 0:

               division =  math.floor(money/b['valor'])
               

               if division > b['cantidad']:
                    papeles = b['cantidad']

               else:
                    papeles = division
               
               entregado.append(bills(b['valor'],papeles))
               money = money-(b['valor']*papeles)

     if money>0:
          print('sorry sir, i am so useless')

     else:
          for i in entregado:
               if i['cantidad']>0:
                    print(f'aqui tienes {i["cantidad"]} billetes de {i["valor"]} \n')
# END OF THE FUNCTION THATS GIVES THE BILLS

# HERE WE ARE CREATING THE VARIABLES AND LISTS THAT WE ARE GOING TO NEED FOR THE ALGORITHM TO START 

entregado = []

cajero = []
cajero.append(bills(50,10))
cajero.append(bills(20,10))
cajero.append(bills(10,10))


entregar_dinero()