type AB = A & B;
function makeAB(): AB {
  return {
    do() {},
    name: ''
  };
}

type StringOrNumber = string | number;
type Arr<T> = T[];
type P<T> = Promise<T>;

class AImpl implements A {
  name: string;
}

type UserState = 'PENDING' | 'APPROVED' | 'REJECTED';

function checkUser(user: A): UserState {
  if (user.name) {
    return 'APPROVED';
  } else {
    return 'REJECTED';
  }
}