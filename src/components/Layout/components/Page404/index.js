import './Page404.scss';
function Page404({ pageName }) {
  return (
    <div className="Page-404">
      <h1>{`404 PAGE ${pageName} NOT FOUND!`}</h1>
      <h4>
        {`Hiện tại trang "${pageName}" vẫn đang trong quá trình hoàn
        thiện. Chúng mình xin lỗi vì sự bất tiện này nhé! :3`}
      </h4>
    </div>
  );
}

export default Page404;
