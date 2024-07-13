enum LegalStructure {}

interface Company {
  name: string;
  status: string;
  state_id: string;
  tax_id: string;
  address: Address;
}

interface Address {
  line1: string;
  line2: string;
  city: string;
  division: string;
  postal: string;
  country: string;
}

interface Person {
  firstname: string;
  lastname: string;
  birthdate: Date;
  address: Address;
  tax_id: string;
}
