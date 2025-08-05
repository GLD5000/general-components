import { useState, useEffect, Dispatch, SetStateAction } from "react";

export default function useApiJson(): {
  data: string[][] | null;
  isLoading: boolean;
  refetch: () => void;
} {
  const [data, setData] = useState<string[][] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchJson(setData, setIsLoading);
  }, [setData, setIsLoading]);

  const refetch = (): void => {
    fetchJson(setData, setIsLoading);
  };

  return { data, isLoading, refetch };
}

async function fetchJson(
  setData: Dispatch<SetStateAction<string[][] | null>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>
): Promise<void> {
  try {
    const response = await fetch(`/api/getApiData/`);
    const jsonData = (await response.json()) as ApiDataJson;

    setData(
      Object.values(jsonData.resources).map((object) => [
        object.title,
        object.url,
      ])
    );
  } catch (error) {
    console.error("Error fetching JSON files:", error);
  } finally {
    setIsLoading(false);
  }
}

export interface ApiDataJson {
  id: string;
  site: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  london_smallest_geography: string;
  descriptionIframe: string;
  author: string;
  author_email: string;
  maintainer: string;
  maintainer_email: string;
  update_frequency: string;
  licence: string;
  description: string;
  tags: string[];
  topics: string[];
  resources: Record<string, ApiDataResource>;
  parent: string;
  state: string;
  title: string;
  sharing: string;
  shares: Shares;
  readonly: Readonly;
}

export interface ApiDataResource {
  url: string;
  order: number;
  title: string;
  format: string;
  origin: string;
  check_hash: string;
  check_size: number;
  description: string;
  check_mimetype: string;
  london_res_geo: any[];
  check_timestamp: string;
  check_http_status: number;
  temporal_coverage_to: string;
  temporal_coverage_from: string;
}

export interface Shares {
  orgs: any[];
  users: any[];
}

export interface Readonly {
  parent: Parent;
  licence: Licence;
  topics: Record<string, Topic>;
}

export interface Parent {
  id: string;
  slug: string;
  title: string;
  img: string;
}

export interface Licence {
  title: string;
  url: string;
  is_okd_compliant: boolean;
}

export interface Topic {
  img: string;
  slug: string;
  title: string;
}
