import { useRouter } from "next/router";

export default function PlayerDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="text-black">
      <h1>Dettaglio del giocatore {id}</h1>
      <p>Qui puoi mostrare più informazioni sul giocatore con ID {id}.</p>
    </div>
  );
}
