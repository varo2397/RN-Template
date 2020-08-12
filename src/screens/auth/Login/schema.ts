import * as Yup from 'yup';

import { globalSchemas } from '@constants';

const schema = Yup.object().shape({
  username: globalSchemas.username,
});

export default schema;
