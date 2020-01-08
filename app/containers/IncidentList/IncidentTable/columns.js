export default [
  {
    title: '#',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: 'Incident Code',
    dataIndex: 'incidentCode',
    key: 'incidentCode',
    sorter: (a, b) => a.name.length - b.name.length,
  }, {
    title: 'Incident Date',
    dataIndex: 'incidentDate',
    key: 'incidentDate',
    sorter: (a, b) => a.name.length - b.name.length,
  }, {
    title: 'Inspection Lot',
    dataIndex: 'inspectionLot',
    key: 'inspectionLot',
    sorter: (a, b) => a.age - b.age,
    // sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
  }, {
    title: 'Mat.Code',
    dataIndex: 'materialCode',
    key: 'materialCode',
    filters: [
      { text: 'London', value: 'London' },
      { text: 'New York', value: 'New York' },
    ],
    // filteredValue: filteredInfo.address || null,
    onFilter: (value, record) => record.address.includes(value),
    sorter: (a, b) => a.address.length - b.address.length,
    // sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
  }, {
    title: 'Mat.Name',
    dataIndex: 'materialName',
    key: 'materialName',
  }, {
    title: 'Batch',
    dataIndex: 'batch',
    key: 'batch',
  }, {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  }, {
    title: 'Lot.Container',
    dataIndex: 'lotContainer',
    key: 'lotContainer',
  }, {
    title: 'Lot.Qty',
    dataIndex: 'lotQuantity',
    key: 'lotQuantity',
  }, {
    title: 'UOM',
    dataIndex: 'unitOfMaterial',
    key: 'unitOfMaterial',
  }, {
    title: 'Conclusion Status',
    dataIndex: 'status',
    key: 'status',
  },
];