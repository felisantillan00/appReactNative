import React from 'react';
import {ScrollView} from 'react-native';
import MenuItem from '../molecules/MenuItem'; // Importas la molécula creada
import TextInfo from '../atoms/TextInfo';
import styles from '../../style/StyleProcedimientosMenu'; // Crearás este archivo de estilos

const ProcedimientosMenu = () => {
    return (
        <ScrollView style={styles.container}>
            <MenuItem
                title="1. Cómo alquilar una propiedad"
                content={
                    <>
                        <TextInfo label="Requisitos:" />
                        <TextInfo label="• Documento de identidad (DNI, pasaporte)." />
                        <TextInfo label="• Garantía propietaria (alguien que ofrezca una propiedad como garantía) o seguro de caución." />
                        <TextInfo label="• Depósito de garantía (normalmente equivalente a un mes de alquiler)." />
                        <TextInfo label="• Contrato firmado (por el inquilino y el propietario)." />
                        <TextInfo label="Procedimiento: " />
                        <TextInfo label="1. Buscar un inmueble: Visitar el sitio web de la inmobiliaria, o contactarse por teléfono o email para identificar propiedades que cumplan con tus necesidades." />
                        <TextInfo label="2. Solicitar una visita: Contactar a la inmobiliaria para coordinar una cita y visitar el inmueble." />
                        <TextInfo label="3. Presentar documentación: Proporcionar la documentación necesaria (DNI, comprobante de ingresos, y garantía)." />
                        <TextInfo label="4. Evaluación del propietario: El propietario evalúa la documentación del inquilino." />
                        <TextInfo label="5. Firma del contrato: Si es aprobado, se firma el contrato de alquiler, detallando los términos del alquiler (precio, duración, responsabilidades, etc.)." />
                        <TextInfo label="6. Pago del depósito y primer mes: Realizar el pago del depósito de garantía y el primer mes de alquiler." />
                        <TextInfo label="7. Entrega de llaves: La inmobiliaria entrega las llaves del inmueble." />
                    </>
                }
            />
            <MenuItem
                title="2. Cómo comprar una propiedad"
                content={
                    <>
                        <TextInfo label="Requisitos:" />
                        <TextInfo label="• Documento de identidad (DNI, pasaporte)." />
                        <TextInfo label="• Fondos para la compra (ahorro o hipoteca)." />
                        <TextInfo label="• Reserva del inmueble." />
                        <TextInfo label="• Firma de una promesa de compra-venta (opcional, dependiendo del país)." />
                        <TextInfo label="• Escritura pública ante notario." />
                        <TextInfo label="Procedimiento: " />
                        <TextInfo label="1. Buscar un inmueble: Identificar una propiedad que te interese en el sitio web de la inmobiliaria o a través de un agente." />
                        <TextInfo label="2. Solicitar una visita: Solicitar una cita para visitar el inmueble." />
                        <TextInfo label="3. Reserva del inmueble: Si decides comprar, realizar una reserva, que implica firmar un documento de oferta formal y hacer un pago de reserva (que luego se deduce del precio final)." />
                        <TextInfo label="4. Financiación: Si necesitas una hipoteca, iniciar el proceso con un banco. Proporcionar la documentación requerida (DNI, comprobantes de ingresos, extractos bancarios)." />
                        <TextInfo label="5. Firma de contrato de compra-venta: Firmar el contrato con la inmobiliaria o el propietario, donde se detallan los términos de la venta." />
                        <TextInfo label="6. Escritura pública: Realizar la escritura pública ante un notario, firmada por ambas partes." />
                        <TextInfo label="7. Pago final y entrega de llaves: Realizar el pago final (incluyendo el monto de la hipoteca si aplica) y recibir las llaves del inmueble." />
                    </>
                }
            />
            <MenuItem
                title="3. Cómo solicito una visita a un inmueble"
                content={
                    <>
                        <TextInfo label="Requisitos:" />
                        <TextInfo label="• Documento de identidad (DNI, pasaporte)." />
                        <TextInfo label="• Ser mayor de edad." />
                        <TextInfo label="Procedimiento: " />
                        <TextInfo label="1. Buscar el inmueble de interés: Navegar en el sitio web o visitar la oficina de la inmobiliaria para seleccionar un inmueble." />
                        <TextInfo label="2. Contactar a la inmobiliaria: Llamar o enviar un correo electrónico para solicitar una visita al inmueble." />
                        <TextInfo label="3. Coordinación de la visita: La inmobiliaria acordará una fecha y hora, y te enviará un agente." />
                        <TextInfo label="4. Visita guiada: Durante la visita, el agente te mostrará la propiedad y responderá tus dudas." />
                        <TextInfo label="5. Evaluación y decisión: Luego de la visita, puedes evaluar si te interesa avanzar con la compra o alquiler." />
                    </>
                }
            />
            <MenuItem
                title="4. Cómo reclamo un siniestro en mi casa que alquilo"
                content={
                    <>
                        <TextInfo label="Requisitos:" />
                        <TextInfo label="• Documento de identidad (DNI, pasaporte)." />
                        <TextInfo label="• Contrato de alquiler." />
                        <TextInfo label="• Póliza de seguro (si aplica)." />
                        <TextInfo label="• Documentación del siniestro (fotos, facturas, etc.)." />
                        <TextInfo label="Procedimiento: " />
                        <TextInfo label="1. Identificar el siniestro: Detectar el daño o problema en la propiedad (rotura de cañerías, incendio, inundación, etc.)." />
                        <TextInfo label="2. Contactar al propietario o inmobiliaria: Informar al propietario o inmobiliaria sobre el siniestro de inmediato." />
                        <TextInfo label="3. Verificar la póliza de seguro: Si existe un seguro contratado para el inmueble, contactar con la aseguradora." />
                        <TextInfo label="4. Realizar el reclamo: Enviar a la inmobiliaria un informe detallado del siniestro, adjuntando fotos, facturas o cualquier otra prueba." />
                        <TextInfo label="5. Evaluación del reclamo: El propietario o la aseguradora evalúan el reclamo y deciden si procede una reparación." />
                        <TextInfo label="6. Reparación o compensación: Si se acepta el reclamo, se realizan las reparaciones necesarias o se compensa al inquilino según los términos del contrato." />
                    </>
                }
            />
            <MenuItem
                title="5. Cómo cancelar un alquiler"
                content={
                    <>
                        <TextInfo label="Requisitos:" />
                        <TextInfo label="• Contrato de alquiler vigente." />
                        <TextInfo label="• Notificación de cancelación por escrito (en muchos casos, con al menos 30 días de antelación)." />
                        <TextInfo label="• Liquidación de deudas (alquileres pendientes, servicios, etc.)." />
                        <TextInfo label="• Inspección del inmueble (para verificar el estado de la propiedad)." />
                        <TextInfo label="Procedimiento: " />
                        <TextInfo label="1. Notificar la cancelación: Informar al propietario o inmobiliaria por escrito de tu intención de cancelar el contrato de alquiler, cumpliendo con el plazo de preaviso establecido (generalmente 30 días antes)." />                    
                        <TextInfo label="2. Pago de deudas pendientes: Asegurarse de que no queden alquileres o servicios sin pagar." />    
                        <TextInfo label="3. Inspección del inmueble: Coordinar con la inmobiliaria una visita para inspeccionar el estado de la propiedad. Si hay daños, se descontarán del depósito de garantía." />    
                        <TextInfo label="4. Devolución de llaves: Entregar las llaves del inmueble a la inmobiliaria o propietario." />    
                        <TextInfo label="5. Devolución del depósito: Si no hay daños en el inmueble ni deudas pendientes, el depósito de garantía es devuelto al inquilino." />    
                    </>
                }
            />
        </ScrollView>
    );
};
export default ProcedimientosMenu;