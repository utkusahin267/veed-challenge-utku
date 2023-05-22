import '../RepositoryList.css'

interface IRepositoryListItemLabel {
  label: string;
  value: string | JSX.Element;
}

export const RepositoryListItemLabel = ({ label, value }: IRepositoryListItemLabel) => (
  <div className="repository-list-item-label-wrapper">
    <div>{label}</div>
    <div>{value}</div>
  </div>
)
