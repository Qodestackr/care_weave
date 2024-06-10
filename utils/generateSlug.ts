import { nanoid } from "nanoid";

export default function generateSlug(/**title: string */) {
  // return title
  //   .toLowerCase()
  //   .replace(/[^\w\s]/g, "")
  //   .replace(/\s+/g, "-");

  return nanoid();
}
