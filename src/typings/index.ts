export type Story = {
    name?: string
    content: string,
    type: string,
    color?: string
};

export type InfoMetadata = {
    title: string,
    description: string,
    summaries?: string[]
    bulletList?: string[],
    subParts?: InfoMetadata[]
};
