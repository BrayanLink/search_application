interface Path {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
  path_from_root: Path[];
}

interface Filter {
  id: string;
  name: string;
  type: string;
  values: Category[];
}
