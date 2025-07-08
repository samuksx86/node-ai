type PineconeDomainProps = {
  id: string;
  values: number[];
  metadata: {
    text: string;
  };
  score?: number;
};

export class PineconeDomain {
  id: string;
  values: number[];
  metadata: {
    text: string;
  };
  score?: number;

  constructor(props: PineconeDomainProps) {
    this.id = props.id;
    this.values = props.values;
    this.metadata = props.metadata;
    this.score = props.score;
  }
}
