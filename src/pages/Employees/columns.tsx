export const columns = [
  {
    key: 'id',
    title: 'ID',
  },
  {
    key: 'name',
    title: 'Nombre',
  },
  {
    key: 'last_name',
    title: 'Apellido',
  },
  {
    key: 'birthday',
    title: 'Fecha de nacimiento',
    custom: (element: any) => {
      var s = new Date(element.birthday).toLocaleDateString('en-US');
      return s;
    },
  },
];
