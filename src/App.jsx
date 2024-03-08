import { Header } from "components/Header/Header";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NotesApi } from "api/api";
import { useDispatch } from "react-redux";
import { setNoteList } from "store/note/note-slice";

export function App() {
  const dispatch = useDispatch();

  async function getNotes() {
    const data = await NotesApi.fetchAllNotes();
    data.sort((a, b) => a.title.localeCompare(b.title))
    dispatch(setNoteList(data));
  }
  
  useEffect(() => {
    getNotes();
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>
      <Header />
      <Outlet />
    </>;
}
