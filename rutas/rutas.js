'use strict'
var express=require('express');
var conectar = require("../modelos/manejobd");
const path = require('path');
var rutas =express.Router();
rutas
//----- -------------------------------Estudiantes----------------
.post("/crear/estudiante", (req, res) => {
    var datos = {
        nombre : req.body.nombre,
        apellido:req.body.apellido,
        cedula:req.body.cedula,
        nivIngles:req.body.nivIngles
    }
    conectar.almacenarEstudiante(datos, () => {
        res.send('El estudiante  ha sido registrado')
    })
})

.get('/consultar/estudiante', (req, res) => {
    var datos = {
        nombre : req.body.nombre,
        apellido:req.body.apellido,
        cedula:req.body.cedula,
        nivIngles:req.body.nivIngles
    }
    var respuesta;
    conectar.buscarEstudianteCedula(datos, (usuario) => {
        if (usuario.length >= 1) {
            respuesta = usuario[0]
            return res.send(respuesta);
        } else {
            console.log("El estudiante no existe")
            respuesta = { mensaje: 'El estudiante no existe' }
            return res.send(respuesta)
        }
    })
})


.put("/editar/estudiante", (req, res) => {
    var datos = {
        nombre : req.body.nombre,
        apellido:req.body.apellido,
        cedula:req.body.cedula,
        nivIngles:req.body.nivIngles
    }
    conectar.buscarEstudianteCedula(datos, (usuario) => {
        if (usuario.length == 1) {
            var response={
                nombre : req.body.nombre,
                apellido:req.body.apellido,
                cedula:req.body.cedula,
                nivIngles:req.body.nivIngles   
            }
            conectar.editarEstudianteCedula(datos, () => {
                res.send('El estudiante si existe')  
            })
        } else {
            var respuesta;
            console.log("No existe el estudiante en la bd")
            respuesta = { mensaje: 'No existe el estudiante en la bd' }
            return res.send(respuesta)
        }
    })
})

.delete("/borrar/estudiante", (req, res) => {
    var datos = {
        nombre : req.body.nombre,
        apellido:req.body.apellido,
        cedula:req.body.cedula,
        nivIngles:req.body.nivIngles
    }
    conectar.buscarEstudianteCedula(datos, (usuario) => {
        if (usuario.length == 1) {
            var response={
                nombre : req.body.nombre,
                apellido:req.body.apellido,
                cedula:req.body.cedula,
                nivIngles:req.body.nivIngles   
            }
            conectar.borrarEstudianteCedula(datos, () => {
                res.send('El estudiante ha sido borrado')  
            })
        } else {
            var respuesta;
            console.log("No existe el estudiante a borrar")
            respuesta = { mensaje: 'No existe el estudiante a borrar' }
            return res.send(respuesta)
        }
    })
})
//----- -------------------------------Docentes----------------
.post("/crear/docente", (req, res) => {
    var datos = {
        nombre : req.body.nombre,
        apellido:req.body.apellido,
        cedula:req.body.cedula,
    }
    conectar.almacenarDocente(datos, () => {
        res.send('El docente  ha sido registrado')
    })
})

.get('/consultar/docente', (req, res) => {
    var datos = {
        nombre : req.body.nombre,
        apellido:req.body.apellido,
        cedula:req.body.cedula,
    }
    var respuesta;
    conectar.buscarDocenteCedula(datos, (usuario) => {
        if (usuario.length == 1) {
            respuesta = datos
            return res.send(respuesta);
        } else {
            console.log("El docente no existe")
            respuesta = { mensaje: 'El docente no existe' }
            return res.send(respuesta)
        }
    })
})


.put("/editar/docente", (req, res) => {
    var datos = {
        nombre : req.body.nombre,
        apellido:req.body.apellido,
        cedula:req.body.cedula,
    }
    conectar.buscarDocenteCedula(datos, (usuario) => {
        if (usuario.length == 1) {
            var response={
                nombre : req.body.nombre,
                apellido:req.body.apellido,
                cedula:req.body.cedula,
                nivIngles:req.body.nivIngles   
            }
            conectar.editarDocenteCedula(datos, () => {
                res.send('El docente si existe')  
            })
        } else {
            var respuesta;
            console.log("No existe el docente en la bd")
            respuesta = { mensaje: 'No existe el docente en la bd' }
            return res.send(respuesta)
        }
    })
})

.delete("/borrar/docente", (req, res) => {
    var datos = {
        nombre : req.body.nombre,
        apellido:req.body.apellido,
        cedula:req.body.cedula,
        nivIngles:req.body.nivIngles
    }
    conectar.buscarDocenteCedula(datos, (usuario) => {
        if (usuario.length == 1) {
            var response={
                nombre : req.body.nombre,
                apellido:req.body.apellido,
                cedula:req.body.cedula,
                nivIngles:req.body.nivIngles   
            }
            conectar.borrarDocenteCedula(datos, () => {
                res.send('El docente ha sido borrado')  
            })
        } else {
            var respuesta;
            console.log("No existe el docente a borrar")
            respuesta = { mensaje: 'No existe el docente a borrar' }
            return res.send(respuesta)
        }
    })
})
//----- -------------------------------Cursos----------------
.post("/crear/curso", (req, res) => {
    var datos = {
        nombre : req.body.nombre,
        codigo: req.body.codigo
    }
    conectar.almacenarCurso(datos, () => {
        res.send('El curso  ha sido registrado')
    })
})

.get('/consultar/curso', (req, res) => {
    var datos = {
        nombre : req.body.nombre,
        codigo:req.body.codigo
    }
    var respuesta;
    conectar.buscarCurso(datos, (usuario) => {
        if (usuario.length == 1) {
            respuesta = datos
            return res.send(respuesta);
        } else {
            console.log("El curso no existe")
            respuesta = { mensaje: 'El curso no existe' }
            return res.send(respuesta)
        }
    })
})


.put("/editar/curso", (req, res) => {
    var datos = {
        nombre : req.body.nombre,
        codigo:req.body.codigo
    }
    conectar.buscarCurso(datos, (usuario) => {
        if (usuario.length == 1) {
            var response={
                nombre : req.body.nombre,
                codigo:req.body.codigo 
            }
            conectar.editarCurso(datos, () => {
                res.send('El curso ha sido modificado')  
            })
        } else {
            var respuesta;
            console.log("No existe el curso en la bd")
            respuesta = { mensaje: 'No existe el curso en la bd' }
            return res.send(respuesta)
        }
    })
})

.delete("/borrar/curso", (req, res) => {
    var datos = {
        nombre : req.body.nombre,
        codigo:req.body.codigo
    }
    conectar.buscarCurso(datos, (usuario) => {
        if (usuario.length == 1) {
            var response={
                nombre : req.body.nombre,
                codigo:req.body.codigo 
            }
            conectar.borrarCurso(datos, () => {
                res.send('El curso ha sido borrado')  
            })
        } else {
            var respuesta;
            console.log("No existe el curso a borrar")
            respuesta = { mensaje: 'No existe el curso a borrar' }
            return res.send(respuesta)
        }
    })
})
//----- -------------------------------Grupo----------------
.post("/crear/grupo", (req, res) => {
    var datos = {
        estudianteid : req.body.estudianteid,
        docenteid: req.body.docenteid,
        cursoid:req.body.cursoid,
        aula:req.body.aula,
        horario:req.body.horario
    }
    console.log("Datos Recibidos")
    conectar.almacenarGrupo(datos, () => {
        res.send('El grupo  ha sido registrado')
    })
})
.get('/consultar/grupo', (req, res) => {
    var datos = {
        grupoid  : req.body.grupoid 
    }
    var respuesta;
    conectar.buscarGrupo(datos, (usuario) => {
        if (usuario.length == 1) {
            respuesta = datos
            return res.send(respuesta);
        } else {
            console.log("El grupo no existe")
            respuesta = { mensaje: 'El grupo no existe' }
            return res.send(respuesta)
        }
    })
})
.put("/editar/grupo", (req, res) => {
    var datos = {
        grupoid:req.body.grupoid,
        estudianteid : req.body.estudianteid,
        docenteid: req.body.docenteid,
        cursoid:req.body.cursoid,
        aula:req.body.aula,
        horario:req.body.horario
    }
    conectar.buscarGrupo(datos, (usuario) => {
        if (usuario.length == 1) {
            var response={
                grupoid:req.body.grupoid,
                estudianteid : req.body.estudianteid,
                docenteid: req.body.docenteid,
                cursoid:req.body.cursoid,
                aula:req.body.aula,
                horario:req.body.horario
            }
            conectar.editarGrupo(datos, () => {
                res.send('El grupo ha sido modificado')  
            })
        } else {
            var respuesta;
            console.log("No existe el grupo en la bd")
            respuesta = { mensaje: 'No existe el grupo en la bd' }
            return res.send(respuesta)
        }
    })
})
.delete("/borrar/grupo", (req, res) => {
    var datos = {
        grupoid:req.body.grupoid,
    }
    conectar.buscarGrupo(datos, (usuario) => {
        if (usuario.length == 1) {
            var response={
                grupoid:req.body.grupoid
            }
            conectar.borrarGrupo(datos, () => {
                res.send('El grupo ha sido borrado')  
            })
        } else {
            var respuesta;
            console.log("No existe el grupo en la bd")
            respuesta = { mensaje: 'No existe el grupo en la bd' }
            return res.send(respuesta)
        }
    })
})

.post('/Iniciarsesion', (req, res) => {
    var datos = {
        cedula: req.body.cedula,
        contrasena: req.body.contrasena
    }
    var respuesta;
    conectar.iniciarSession(datos, (usuario) => {
        if (usuario.length >= 1) {
            respuesta = {
                mensaje: 'usuario si existe'
            }
            return res.status(200).send(respuesta);
        } 
        else {
            console.log("No existe")
            respuesta = { mensaje: 'usuario no existe' }
            return res.send(respuesta)
        }
    })
})

module.exports=rutas