export default function ContentHeader({ title, breadcrumb }:{ title: string, breadcrumb: BreadCrumbItems }) {
    return (
        <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1>{title}</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            {breadcrumb.map((item: BreadCrumbItem, idx: number) => (
                                <li key={idx} className={"breadcrumb-item" + (item.active ? ' active': '')}>
                                    {item.url ? (<a href={item.url}>{item.title}</a>): item.title}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}
type BreadCrumbItem = { title: string, url?: string, active?: boolean};
export type BreadCrumbItems = BreadCrumbItem[];