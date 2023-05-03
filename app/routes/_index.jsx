import { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/global.css";

export const links = () => {
    return [
        { rel: "stylesheet", href: stylesUrl },
    ]
};

export default function IndexRoute() {
    return (
        <div>
            <Link to="products">Products</Link>
        </div>
    );
}