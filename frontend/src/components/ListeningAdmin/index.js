import LoopIcon from '@material-ui/icons/Loop';
import AutoSearchInput from 'components/UI/AutoSearchInput';
import InfiniteScroll from 'components/UI/InfiniteScroll';
import SortTypeModal from 'components/UI/SortType';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import useStyle from './style';
import WordItem from './ListeningItem/index';
import WordPackSetting from './WordPackSetting';
import WordSkeleton from './WordSkeleton';
import AddIcon from '@material-ui/icons/Add';



function ListeningAdmin({
  list,
  loading,
  onLoadData,
  more,
  isFirstLoad,
  onSettingWordPack,
  onSortTypeChange,
  onSearchWord,
}) {
  const classes = useStyle();

  return (
    <div className={`${classes.root} dyno-container`}>
      {/* title - menu */}
      <div className="flex-center-between">
        <h1 className="dyno-title">Manage Listening</h1>
        <div>
          <AddIcon className="dyno-setting-icon mr-5" Link/>
  
          <SortTypeModal
            onSelect={onSortTypeChange}
            classNameIcon="dyno-setting-icon mr-5"
          />
          <WordPackSetting
              onChoose={onSettingWordPack}
              classNameIcon="dyno-setting-icon"
          />
        </div>
      </div>
      <div className="dyno-break"></div>

      {/* list content */}
      <div className={classes.contentWrap}>
        <AutoSearchInput disabled={loading} onSearch={onSearchWord} />

        <div className={`${classes.listWrap} w-100`}>
          <ul id="dictionaryId" className={`${classes.list} flex-col w-100`}>
            <>
              {isFirstLoad ? (
                <WordSkeleton className={classes.skeleton} />
              ) : (
                <>
                  {list && list.length > 0 ? (
                    <>
                      {/* render list */}
                      {list.map((item, index) => (
                        <li className={classes.listItem} key={index}>
                          <WordItem {...item} />
                        </li>
                      ))}

                      {/* infinite scrolling */}
                      {!loading && more && (
                        <InfiniteScroll
                          onTouchAnchor={onLoadData}
                          threshold={1}>
                          <div className="w-100 t-center">
                            <LoopIcon className="ani-spin" />
                          </div>
                        </InfiniteScroll>
                      )}
                    </>
                  ) : (
                    // empty list
                    <h3 className="notfound-title h-100 flex-center t-center">
                      No result.
                    </h3>
                  )}
                </>
              )}
            </>
          </ul>
        </div>
      </div>
    </div>
  );
}

ListeningAdmin.propTypes = {
  isFirstLoad: PropTypes.bool,
  list: PropTypes.array,
  loading: PropTypes.bool,
  more: PropTypes.bool,
  onLoadData: PropTypes.func,
  onSearchWord: PropTypes.func,
  onSettingWordPack: PropTypes.func,
  onSortTypeChange: PropTypes.func,
};

ListeningAdmin.defaultProps = {
  list: [],
  loading: false,
  more: true,
  isFirstLoad: true,
  onLoadData: function () {},
  onSearchWord: function () {},
  onSettingWordPack: function () {},
  onSortTypeChange: function () {},
};

export default ListeningAdmin;
