type PineconeDomainProps = {
  id: string;
  values: number[];
  metadata: {
    text: string;
  };
};

export class PineconeDomain {
  id: string;
  values: number[];
  metadata: {
    text: string;
  };

  constructor(props: PineconeDomainProps) {
    this.id = props.id;
    this.values = props.values;
    this.metadata = props.metadata;
  }
}
