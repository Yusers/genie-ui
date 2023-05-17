import Page404 from '~/components/Layout/components/Page404';
import './Community.scss';
function Community() {
  return (
    <div className="Community">
      {<Page404 pageName={'Community'} /> || (
        <div className="post">
          <div className="post-img">
            <img src="/images/pages/photos.png" alt="img" />
          </div>
          <div className="post-info">
            <div className="post-info-header">
              <h4>Header</h4>
            </div>
            <div className="post-info-body">
              <p>text descr</p>
            </div>
            <div className="post-info-footer">
              <input type="text" />
              <p>text descr</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Community;
