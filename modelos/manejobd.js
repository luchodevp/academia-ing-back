'use strict'
var conectar = require("./conectardb")

function Conexion() {}
const usuarios={}
Conexion.almacenarEstudiante = (datos, cb) => {
    conectar.query(`INSERT INTO estudiantes VALUES ("${datos.nombre}","${datos.apellido}","${datos.cedula}","${datos.nivIngles}")`, function(err, res) {
        if (err) {
            console.log(err)
        } else {
            cb()
        }
    })
}

Conexion.buscarEstudianteCedula = (datos, cb) => {
    var sql = `SELECT * FROM estudiantes WHERE cedula ="${datos.cedula}"`;
    conectar.query(sql, function(err, res) {
        if (err) {
            console.log("Alerta el estudiante con la cédula[",`"${datos.cedula}"`,"] No se encuentra registrado")
            console.log(err);
            throw err;
        } else {
            cb(res)
        }
    })
}

Conexion.editarEstudianteCedula = (datos, cb) => {
    var sql = `UPDATE  estudiantes SET nombre="${datos.nombre}",apellido="${datos.apellido}",nivIngles="${datos.nivIngles}"
      WHERE cedula ="${datos.cedula}"`;
    conectar.query(sql, function(err, res) {
        if (err) {
            console.log("No se pudo modificar el estudiante con la cédula[",`"${datos.cedula}"`,"]")
            console.log(err);
            throw err;
        } else {
            cb(res)
        }
    })
}
Conexion.borrarEstudianteCedula = (datos, cb) => {
    var sql = `DELETE FROM estudiantes WHERE cedula ="${datos.cedula}"`;
    conectar.query(sql, function(err, res) {
        if (err) {
            console.log("No se pudo borrar el estudiante con la cédula[",`"${datos.cedula}"`,"]")
            console.log(err);
            throw err;
        } else {
            cb(res)
        }
    })
}
Conexion.almacenarDocente = (datos, cb) => {
    conectar.query(`INSERT INTO docentes VALUES ("${datos.nombre}","${datos.apellido}","${datos.cedula}")`, function(err, res) {
        if (err) {
            console.log(err)
        } else {
            cb()
        }
    })
}


Conexion.buscarDocenteCedula = (datos, cb) => {
    var sql = `SELECT * FROM docentes WHERE cedula ="${datos.cedula}"`;
    conectar.query(sql, function(err, res) {
        if (err) {
            console.log("Alerta el docente con la cédula[",`"${datos.cedula}"`,"] No se encuentra registrado")
            console.log(err);
            throw err;
        } else {
            cb(res)
        }
    })
}
Conexion.editarDocenteCedula = (datos, cb) => {
    var sql = `UPDATE  docentes SET nombre="${datos.nombre}",apellido="${datos.apellido}"
      WHERE cedula ="${datos.cedula}"`;
    conectar.query(sql, function(err, res) {
        if (err) {
            console.log("No se pudo modificar el estudiante con la cédula[",`"${datos.cedula}"`,"]")
            console.log(err);
            throw err;
        } else {
            cb(res)
        }
    })
}
Conexion.borrarDocenteCedula = (datos, cb) => {
    var sql = `DELETE FROM docentes WHERE cedula ="${datos.cedula}"`;
    conectar.query(sql, function(err, res) {
        if (err) {
            console.log("No se pudo borrar el estudiante con la cédula[",`"${datos.cedula}"`,"]")
            console.log(err);
            throw err;
        } else {
            cb(res)
        }
    })
}
Conexion.almacenarCurso = (datos, cb) => {
    conectar.query(`INSERT INTO cursos VALUES ("${datos.nombre}","${datos.codigo}")`, function(err, res) {
        if (err) {
            console.log(err)
        } else {
            cb()
        }
    })
}
Conexion.buscarCurso = (datos, cb) => {
    var sql = `SELECT * FROM cursos WHERE codigo ="${datos.codigo}"`;
    conectar.query(sql, function(err, res) {
        if (err) {
            console.log("Alerta el curso con la codigo[",`"${datos.codigo}"`,"] No se encuentra registrado")
            console.log(err);
            throw err;
        } else {
            cb(res)
        }
    })
}

Conexion.editarCurso = (datos, cb) => {
    var sql = `UPDATE  cursos SET nombre="${datos.nombre}"
      WHERE codigo ="${datos.codigo}"`;
    conectar.query(sql, function(err, res) {
        if (err) {
            console.log("No se pudo modificar el curso con la código[",`"${datos.codigo}"`,"]")
            console.log(err);
            throw err;
        } else {
            cb(res)
        }
    })
}
Conexion.borrarCurso = (datos, cb) => {
    var sql = `DELETE FROM cursos WHERE codigo ="${datos.codigo}"`;
    conectar.query(sql, function(err, res) {
        if (err) {
            console.log("No se pudo borrar el curso con la código[",`"${datos.codigo}"`,"]")
            console.log(err);
            throw err;
        } else {
            cb(res)
        }
    })
}

// ---- Completar para grupos

Conexion.almacenarGrupo = (datos, cb) => {
    var sql=`INSERT INTO grupos (estudianteid,docenteid,cursoid,aula,horario) VALUES ("${datos.estudianteid}","${datos.docenteid}","${datos.cursoid}","${datos.aula}","${datos.horario}")`
    conectar.query(sql, function(err, res) {
        if (err) {
            console.log(err)
        } else {
            cb()
        }
    })
}

Conexion.buscarGrupo = (datos, cb) => {
    var sql = `SELECT * FROM grupos WHERE grupoid="${datos.grupoid}"`;
    console.log(sql)
    conectar.query(sql, function(err, res) {
        if (err) {
            console.log("Alerta el grupo [",`"${datos.grupoid}"`,"] No se encuentra registrado")
            console.log(err);
            throw err;
        } else {
            cb(res)
        }
    })
}
Conexion.editarGrupo = (datos, cb) => {
    var sql = `UPDATE  grupos SET estudianteid="${datos.estudianteid}",docenteid="${datos.docenteid}",cursoid="${datos.cursoid}",aula="${datos.aula}",horario="${datos.horario}"
    WHERE grupoid ="${datos.grupoid}"`;
    conectar.query(sql, function(err, res) {
        if (err) {
            console.log("No se pudo modificar el grupo [",`"${datos.grupoid}"`,"]")
            console.log(err);
            throw err;
        } else {
            cb(res)
        }
    })
}
Conexion.borrarGrupo = (datos, cb) => {
    var sql = `DELETE FROM grupos WHERE grupoid ="${datos.grupoid}"`;
    console.log(sql)
    conectar.query(sql, function(err, res) {
        if (err) {
            console.log("No se pudo borrar el estudiante con la cédula[",`"${datos.grupoid}"`,"]")
            console.log(err);
            throw err;
        } else {
            cb(res)
        }
    })
}

Conexion.iniciarSession = (datos, cb) => {
    var sql = `SELECT cedula,contrasena FROM administradores WHERE cedula ="${datos.cedula}"  and contrasena="${datos.contrasena}"`;
    conectar.query(sql, function(err, res) {
        if (err) {
            console.log("ALERTA ERROR EN VERIFICAR ADMIN")
            console.log(err);
            throw err;
        } else {
            cb(res)
        }
    })

}
module.exports = Conexion;