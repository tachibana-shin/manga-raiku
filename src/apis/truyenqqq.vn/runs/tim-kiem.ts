import { PostWorker } from "src/apis/wrap-worker"

import type Parse from "../parsers/[general]"
import Worker from "../workers/[general]?worker"

export default async function (query: string, page: number) {
  const { data } = await get(
    `/tim-kiem/trang-${page}.html?q=${encodeURIComponent(query)}`
  )

  return PostWorker<typeof Parse>(Worker, data, Date.now())
}
