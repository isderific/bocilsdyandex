"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import Center from "@/components/layouts/center";
import MessageBox from "@/components/message-box";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);
    ({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}); =>
    const page =
        (searchParams.page && parseInt(searchParams.page as string)) || 10;
    const per_page =
        (searchParams.per_page && parseInt(searchParams.per_page as string)) ||
        DEFAULT_PER_PAGE;
    const fld_id =
        (searchParams.fld_id && (searchParams.fld_id as string)) || undefined;
    const query = (searchParams.q && (searchParams.q as string)) || undefined;

    return (
        <MessageBox title={error.message} countdown={3}>
            <Button onClick={reset}>Try Again</Button>
        </MessageBox>
        <div className="md:my-2">
            {query ? (
                <SearchCardList query={query} banner />
            ) : (
                <CardList page={page} per_page={per_page} fld_id={fld_id} />
            )}
        </div>
    );
}
