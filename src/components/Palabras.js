var Lenguajes_De_Programacion = [
	"python",
	"javascript",
	"mongodb",
	"json",
	"java",
	"html",
	"css",
  "c",
	"csharp",
	"golang",
	"kotlin",
	"php",
	"sql",
  "ruby",
  "fortran"
]

function palabraRandom() {
  return Lenguajes_De_Programacion[Math.floor(Math.random() * Lenguajes_De_Programacion.length)]
}

export { palabraRandom }