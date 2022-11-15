const operationsSqlQuery = (port_id) => {
    return `SELECT
                  operations.id,
                  ports.name as port_name,
                  ships.name as ship_name,
                  agents.shipping_agent,
                  agents.shipping_line,
                  operations.port_no,
                  operations.show_time,
                  operations.porting_time,
                  operations.quantity_import_cargo,
                  operations.quantity_export_cargo,
                  operations.discharge_sentence,
                  operations.leaving_time,
                  operations.status
              FROM
                  operations INNER JOIN ports on ports.id = operations.port_id
                             INNER JOIN ships on ships.id = operations.ship_id
                             INNER JOIN agents on agents.id = ships.agent_id 
              WHERE operations.port_id = ${port_id}`;
}

export default operationsSqlQuery


