import { Puff } from 'react-loader-spinner';

export function Loader() {
  return (
    <Puff
  height="90"
  width="90"
  radius={1}
  color="#4fa94d"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
    />
  );
}
