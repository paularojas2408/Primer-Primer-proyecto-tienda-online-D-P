Funciónquedeterminesiunañoesbisiesto
 esBisiesto(ano):
    if (ano % 4 == 0 and ano % 100 != 0) or (ano % 400 == 0):
        return True
    else:
        return False

FunciónqueconviertagradosCelsiusaFahrenheit
         celsiusAFahrenheit(celsius):
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit


Funciónquedevuelvaelmayordedosnúmeros
     mayorDeDos(n1, n2):
    return max(n1, n2)


Funciónqueconviertaunacantidaddeminutosenunacadenaqueindique
cuántashorasyminutoscorresponden.
     convertirMinutos(minutos):
    horas = minutos // 60
    minutos_restantes = minutos % 60
    return f"{horas} horas y {minutos_restantes} minutos"

Funciónquedeterminesiunnúmeroestádentrodeunrangodado
(incluyendoloslímites).
     estaEnRango(numero, inicio, fin):
    return inicio <= numero <= fin


Funciónquecalculeelpreciofinaldespuésdeaplicarunporcentajede
descuentoaunprecioinicial.
     alcularPrecioFinal(precioInicial, descuento):
    precioFinal = precioInicial * (1 - descuento / 100)
    return precioFinal

Funciónquedeterminesiunapersonapuedevotarsegúnsuedad
     puedeVotar(edad):
    return edad >= 18

Funciónquecalculeeláreadeuntriángulodadossubaseyaltura.
     calcularAreaTriangulo(base, altura):
    area = (base * altura) / 2
    return area

