export interface stateRegion {
    name: "State" | "Region",
    value: string
}

export interface edgeProducts {
    cursor: string
    node: {
        customFields: {
            edges: {
                node: {
                    name: string
                    value: string
                }
            }[]
        },
        path: string
    }
}
