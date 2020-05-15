import uuidv4 from 'uuid/v4';

export default ({
  create: () => uuidv4(),
  v4: () => uuidv4(),
});
