namespace tarea_2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ingrese su nombre: ");
            string nombre = Console.ReadLine();
            Console.WriteLine("Ingrese su apellido: ");
            string apellido = Console.ReadLine();
            Console.WriteLine("Ingrese su edad: ");
            int edad = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Sabe programar ? ");
            string pregunta = Console.ReadLine();
 
            Console.WriteLine("Nombre: " + nombre);
            Console.WriteLine("Apellido: " + apellido);
            Console.WriteLine("Edad: " + edad);
            Console.WriteLine("Respuesta: " + pregunta);

        }
    }
}

/*
 Ejercicio 1

Variables Escribe un programa que reciba datos de una 
persona y genera un mensaje, usa una variable para cada dato
y otra para el mensaje. Ej: nombre, apellido, edad, sabe programar, etc.

Ejercicio 2

Tipos Usando los tipos de variables más adecuados,
describe los objetos siguientes:

Coche: puertas, ruedas, marca, ITV vigente

Mesa: peso, largo, material, color

Nota: puedes escribir estos datos por consola si prefieres verlos.
La idea del ejercicio es almacenar los datos en los tipos más adecuados.

Ejercicio 3

Operadores Determina los operadores para verificar las siguientes condiciones:

Un número es mayor o igual a 18

Un char es ‘a’

Se cumplen dos conciones a la vez (ambas verdaderas)

Se cumple una de dos condiciones a la vez (una true y otra false)

Nota: puedes escribir estos datos por consola si prefieres verlos.
La idea del ejercicio es almacenar los datos en los tipos más adecuados.
*/