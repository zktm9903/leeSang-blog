import Link from 'next/link';

export default function PageController({
  path,
  params,
  contentsLen,
  nowNum,
}: {
  path: string;
  params: string[];
  contentsLen: number;
  nowNum: number;
}) {
  function showNum(cur: number) {
    const result = [];
    const pageLen = Math.ceil(contentsLen / 10);
    cur--;

    for (let i = cur - 2; i <= cur + 2; i++) {
      if (0 <= i && i <= pageLen - 1) result.push(i + 1);
    }

    return result;
  }

  return (
    <div className="flex items-center justify-center text-base">
      <SkipLeft />
      <Left />
      {showNum(nowNum).map((el) => (
        <Link
          key={el}
          className={`${
            el === nowNum && 'bg-_gray'
          } hover:bg-_gray flex h-6 w-6 cursor-pointer items-center justify-center rounded-md`}
          href={`${path}?${
            params.length ? `${params.join('&')}&` : ''
          }page=${el}`}>
          <p>{el}</p>
        </Link>
      ))}
      <Right />
      <SkipRight />
    </div>
  );
}

function Left() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#E5E5EA"
      className="hover:bg-_gray w-6 cursor-pointer rounded-md">
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
    </svg>
  );
}

function Right() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#E5E5EA"
      className="hover:bg-_gray w-6 cursor-pointer rounded-md">
      <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path>
    </svg>
  );
}

function SkipLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#E5E5EA"
      className="hover:bg-_gray w-6 cursor-pointer rounded-md">
      <path d="M13.9142 12.0001L18.7071 7.20718L17.2929 5.79297L11.0858 12.0001L17.2929 18.2072L18.7071 16.793L13.9142 12.0001ZM7 18.0001V6.00008H9V18.0001H7Z"></path>
    </svg>
  );
}

function SkipRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#E5E5EA"
      className="hover:bg-_gray w-6 cursor-pointer rounded-md">
      <path d="M10.0859 12.0001L5.29297 16.793L6.70718 18.2072L12.9143 12.0001L6.70718 5.79297L5.29297 7.20718L10.0859 12.0001ZM17.0001 6.00008L17.0001 18.0001H15.0001L15.0001 6.00008L17.0001 6.00008Z"></path>
    </svg>
  );
}
