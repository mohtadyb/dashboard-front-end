import {Tag} from "antd";

function PortData(props) {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>الميناء</th>
                    <th>اسم السفينة</th>
                    <th>الوكيل الملاحي</th>
                    <th>الخط الملاحي</th>

                    <th>رقم المربط</th>
                    <th>وقت الظهور</th>
                    <th>وقت الربط</th>
                    <th>البضاعة الواردة/طن</th>

                    <th>البضاعة الصادرة/طن</th>
                    <th>جملة التفريغ</th>
                    <th>وقت وتاريخ المغادرة</th>
                    <th>الحالة</th>
                </tr>
                </thead>
                <tbody>
                { props.operations.map((item, index) => (
                    <tr key={item.ID}>
                        <td>{item.PORT_NAME}</td>
                        <td>{item.SHIP_NAME}</td>
                        <td>{item.SHIPPING_AGENT}</td>
                        <td>{item.SHIPPING_LINE}</td>

                        <td>{item.PORT_NO}</td>
                        <td>{item.SHOW_TIME}</td>
                        <td>{item.PORTING_TIME}</td>
                        <td>{item.QUANTITY_IMPORT_CARGO}</td>

                        <td>{item.QUANTITY_EXPORT_CARGO}</td>
                        <td>{item.DISCHARGE_SENTENCE}</td>
                        <td>{item.LEAVING_TIME}</td>
                        <td>{item.STATUS === 1?
                            <Tag color="yellow" key={item.STATUS}>
                                متوقعة
                            </Tag>:
                            item.STATUS === 2?
                            <Tag color="orange" key={item.STATUS}>
                                 في الانتظار
                            </Tag>:
                            item.STATUS === 3?
                            <Tag color="blue" key={item.STATUS}>
                                 تم الربط
                            </Tag>:
                            <Tag color="green" key={item.STATUS}>
                                 غادرت
                            </Tag>}
                         </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default PortData;
