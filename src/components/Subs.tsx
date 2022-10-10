interface Props {
  subs: Array<Sub>;
}

export default function Subs({ subs }: Props) {
  return (
    <div className="divSubs">
      {subs.map((e) => {
        return (
          <div className="Sub" key={e.nick}>
            <img src={e.avatar} alt="" />
            <h3>{e.nick}</h3>
            <p>Sub Months: {e.subMonths}</p>
            <p>{e.description?.substring(0, 100)}</p>
          </div>
        );
      })}
    </div>
  );
}
