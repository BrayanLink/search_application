const Breadcrumb = ({filters}: {filters: Filter[]}) => {
  const paths = filters[0].values[0]?.path_from_root;

  if (!paths || paths.length == 0) return;

  return (
    <ul className="breadcrumb">
      {paths?.map((path, key) => {
        return (
          <li className="breadcrumb_item" key={`${key}-${path.name}`}>
            <a
              href="/"
              onClick={event => {
                event.preventDefault();
              }}
            >
              {path.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumb;
