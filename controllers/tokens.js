const Token = require('../models/token/token');
const uuid = require('uuid');

const validateNip = async (req, res) => {

    try {
        const { nipChofer, nipVehicle, choferID, vehicleID } = req.body;

        if (!choferID || !vehicleID) {
            return res.status(400).json({
                msg: 'Faltan datos'
            });
        }

        const token = new Token({
            token: uuid.v4()
        });
        await token.save();
        res.json({
            codigo: token.token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error en el servidor'
        });
    }


}

const validateCode = async (req, res) => {


    const { codigo, macDispositivo, bomba } = req.body;

    const tokenDB = await Token.findOne({
        token: codigo,

    });

    if (!tokenDB) {
        return res.status(400).json({
            msg: 'Token no válido'
        });
    }

    res.json(
        {
            "autorizacionDetalle": {
                "autorizado": true,
                "clienteId": 1,
                "codigoAutorizacion": 12345,
                "mensaje": "Autorizado",
                "montoAutorizado": 100.0,
                "nip": "",
                "productoAutorizado": "Producto",
                "tarjetaId": 1,
                "tipoAutorizacion": "Tipo",
                "ultimaCarga": 1,
                "ultimoOdometro": 1
            },
            "clienteDetalle": {
                "ciudad": "Ciudad",
                "clienteId": 1,
                "codigoPostal": "12345",
                "colonia": "Colonia",
                "domicilio": "Domicilio",
                "estatus": "Estatus",
                "formulaRend": 1,
                "grupo": "Grupo",
                "identificadorId": 1,
                "nombre": "Nombre",
                "razonSocial": "Razon Social",
                "rfc": "RFC",
                "telefono": "1234567890"
            },
            "vehiculoDetalle": {
                "acumMes": 100.0,
                "banderaCan": 1,
                "clienteId": 1,
                "codEstatus": 1,
                "codigoVehiculo": "Codigo",
                "departamento": "Departamento",
                "disponibleMensual": 100.0,
                "exigeChofer": 1,
                "identificacion": "Identificacion",
                "nombre": "Nombre",
                "nroPat": "NroPat",
                "numPlacas": "NumPlacas",
                "numeroEconomico": "NumeroEconomico",
                "rendim": 1,
                "ruta": "Ruta",
                "tarjetaId": 1,
                "tarjetaVehiculo": 1,
                "ultimaCargaLitros": 100.0
            }
        }
    );

}



module.exports = {
    validateNip,
    validateCode
}