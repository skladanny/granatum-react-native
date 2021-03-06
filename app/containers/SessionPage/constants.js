import { Platform } from 'react-native';

const prefix = 'Session';

//
// Session constants
//

export const SET_ACTIVE_SHEET_ID = `${prefix}/SET_ACTIVE_SHEET_ID`;
export const ENTER_SESSION = `${prefix}/ENTER_SESSION`;
export const LEAVE_SESSION = `${prefix}/LEAVE_SESSION`;

export const GET_SESSION_REQUEST = `${prefix}/GET_SESSION_REQUEST`;
export const GET_SESSION_SUCCESS = `${prefix}/GET_SESSION_SUCCESS`;
export const GET_SESSION_FAILURE = `${prefix}/GET_SESSION_FAILURE`;

export const GET_COURSE_USERS_FAILURE = `${prefix}/GET_COURSE_USERS_FAILURE`;
export const GET_COURSE_USERS_SUCCESS = `${prefix}/GET_COURSE_USERS_SUCCESS`;

export const START_SESSION_REQUEST = `${prefix}/START_SESSION_REQUEST`;
export const START_SESSION_SUCCESS = `${prefix}/START_SESSION_SUCCESS`;
export const START_SESSION_FAILURE = `${prefix}/START_SESSION_FAILURE`;

export const BEGIN_SESSION_REQUEST = `${prefix}/BEGIN_SESSION_REQUEST`;
export const BEGIN_SESSION_FAILURE = `${prefix}/BEGIN_SESSION_FAILURE`;
// export const BEGIN_SESSION_RECEIVE = `${prefix}/BEGIN_SESSION_RECEIVE`;

export const COMPLETE_SESSION_REQUEST = `${prefix}/COMPLETE_SESSION_REQUEST`;
export const COMPLETE_SESSION_FAILURE = `${prefix}/COMPLETE_SESSION_FAILURE`;
// export const COMPLETE_SESSION_RECEIVE = `${prefix}/COMPLETE_SESSION_RECEIVE`;

export const SET_ACTIVE_SHEET = `${prefix}/SET_ACTIVE_SHEET`;

export const SET_ACTIVE_SESSION_THEME_REQUEST = `${prefix}/SET_ACTIVE_SESSION_THEME_REQUEST`;
export const SET_ACTIVE_SESSION_THEME_FAILURE = `${prefix}/SET_ACTIVE_SESSION_THEME_FAILURE`;
export const SET_ACTIVE_SESSION_THEME_RECEIVE = `${prefix}/SET_ACTIVE_SESSION_THEME_RECEIVE`;

export const SET_ACTIVE_SESSION_FONTS_REQUEST = `${prefix}/SET_ACTIVE_SESSION_FONTS_REQUEST`;
export const SET_ACTIVE_SESSION_FONTS_FAILURE = `${prefix}/SET_ACTIVE_SESSION_FONTS_FAILURE`;
export const SET_ACTIVE_SESSION_FONTS_RECEIVE = `${prefix}/SET_ACTIVE_SESSION_FONTS_RECEIVE`;

export const CREATE_THEME_REQUEST = `${prefix}/CREATE_THEME_REQUEST`;
export const CREATE_THEME_RECEIVE = `${prefix}/CREATE_THEME_RECEIVE`;
export const CREATE_THEME_FAILURE = `${prefix}/CREATE_THEME_FAILURE`;

export const UPDATE_THEME_REQUEST = `${prefix}/UPDATE_THEME_REQUEST`;
export const UPDATE_THEME_RECEIVE = `${prefix}/UPDATE_THEME_RECEIVE`;
export const UPDATE_THEME_FAILURE = `${prefix}/UPDATE_THEME_FAILURE`;

export const REMOVE_THEME_REQUEST = `${prefix}/REMOVE_THEME_REQUEST`;
export const REMOVE_THEME_RECEIVE = `${prefix}/REMOVE_THEME_RECEIVE`;
export const REMOVE_THEME_FAILURE = `${prefix}/REMOVE_THEME_FAILURE`;

export const CREATE_FONT_PAIRS_REQUEST = `${prefix}/CREATE_FONT_PAIRS_REQUEST`;
export const CREATE_FONT_PAIRS_RECEIVE = `${prefix}/CREATE_FONT_PAIRS_RECEIVE`;
export const CREATE_FONT_PAIRS_FAILURE = `${prefix}/CREATE_FONT_PAIRS_FAILURE`;

export const UPDATE_FONT_PAIRS_REQUEST = `${prefix}/UPDATE_FONT_PAIRS_REQUEST`;
export const UPDATE_FONT_PAIRS_RECEIVE = `${prefix}/UPDATE_FONT_PAIRS_RECEIVE`;
export const UPDATE_FONT_PAIRS_FAILURE = `${prefix}/UPDATE_FONT_PAIRS_FAILURE`;

export const REMOVE_FONT_PAIRS_REQUEST = `${prefix}/REMOVE_FONT_PAIRS_REQUEST`;
export const REMOVE_FONT_PAIRS_RECEIVE = `${prefix}/REMOVE_FONT_PAIRS_RECEIVE`;
export const REMOVE_FONT_PAIRS_FAILURE = `${prefix}/REMOVE_FONT_PAIRS_FAILURE`;

export const GET_FONTS_REQUEST = `${prefix}/GET_FONTS_REQUEST`;
export const GET_FONTS_RECEIVE = `${prefix}/GET_FONTS_RECEIVE`;
export const GET_FONTS_FAILURE = `${prefix}/GET_FONTS_FAILURE`;

export const CHANGE_GRID_BREAKPOINT = `${prefix}/CHANGE_GRID_BREAKPOINT`;

export const TOGGLE_EDITING_MODE = `${prefix}/TOGGLE_EDITING_MODE`;
export const TOGGLE_EDITING_MODE_RECEIVE = `${prefix}/TOGGLE_EDITING_MODE_RECEIVE`;

export const TOGGLE_FOLLOW_MODE = `${prefix}/TOGGLE_FOLLOW_MODE`;
export const UNFOLLOW = `${prefix}/UNFOLLOW`;
export const UPDATE_SESSION_FAILURE = `${prefix}/UPDATE_SESSION_FAILURE`;
export const UPDATE_SESSION_RECEIVE = `${prefix}/UPDATE_SESSION_RECEIVE`;

export const TOGGLE_COMMUNICATION_BAR_OPEN_REQUEST = `${prefix}/TOGGLE_COMMUNICATION_BAR_OPEN_REQUEST`;
export const TOGGLE_COMMUNICATION_BAR_OPEN_FAILURE = `${prefix}/TOGGLE_COMMUNICATION_BAR_OPEN_FAILURE`;

export const TOGGLE_SCREEN_SHARING_ACCESS = `${prefix}/TOGGLE_SCREEN_SHARING_ACCESS`;

export const WIDGET_RESIZED = `${prefix}/WIDGET_RESIZED`;
export const DISABLE_WIDGET_RESIZED = `${prefix}/DISABLE_WIDGET_RESIZED`;

export const OPEN_TEAMS_MANAGEMENT_MODAL = `${prefix}/OPEN_TEAMS_MANAGEMENT_MODAL`;
export const CLOSE_TEAMS_MANAGEMENT_MODAL = `${prefix}/CLOSE_TEAMS_MANAGEMENT_MODAL`;
export const CHANGE_TEAMS_MANAGEMENT_SHEET = `${prefix}/CHANGE_TEAMS_MANAGEMENT_SHEET`;

export const GET_TEAMS_SETS_SUCCESS = `${prefix}/GET_TEAMS_SETS_SUCCESS`;
export const GET_TEAMS_SETS_FAILURE = `${prefix}/GET_TEAMS_SETS_FAILURE`;

export const GET_USERS_TO_TEAMS_FAILURE = `${prefix}/GET_USERS_TO_TEAMS_FAILURE`;
export const GET_USERS_TO_TEAMS_SUCCESS = `${prefix}/GET_USERS_TO_TEAMS_SUCCESS`;

export const CREATE_TEAMS_SET_REQUEST = `${prefix}/CREATE_TEAMS_SET_REQUEST`;
export const CREATE_TEAMS_SET_FAILURE = `${prefix}/CREATE_TEAMS_SET_FAILURE`;
export const CREATE_TEAMS_SET_RECEIVE = `${prefix}/CREATE_TEAMS_SET_RECEIVE`;

export const UPDATE_TEAMS_SET_RECEIVE = `${prefix}/UPDATE_TEAMS_SET_RECEIVE`;

export const BIND_TEAMS_SET_TO_SHEET_REQUEST = `${prefix}/BIND_TEAMS_SET_TO_SHEET_REQUEST`;
export const BIND_TEAMS_SET_TO_SHEET_FAILURE = `${prefix}/BIND_TEAMS_SET_TO_SHEET_FAILURE`;

export const REDISTRIBUTE_USERS_REQUEST = `${prefix}/REDISTRIBUTE_USERS_REQUEST`;
export const REDISTRIBUTE_USERS_FAILURE = `${prefix}/REDISTRIBUTE_USERS_FAILURE`;

export const REMOVE_TEAMS_SET_REQUEST = `${prefix}/REMOVE_TEAMS_SET_REQUEST`;
export const REMOVE_TEAMS_SET_FAILURE = `${prefix}/REMOVE_TEAMS_SET_FAILURE`;
export const REMOVE_TEAMS_SET_RECEIVE = `${prefix}/REMOVE_TEAMS_SET_RECEIVE`;

export const CREATE_TEAM_REQUEST = `${prefix}/CREATE_TEAM_REQUEST`;
export const CREATE_TEAM_FAILURE = `${prefix}/CREATE_TEAM_FAILURE`;
export const CREATE_TEAM_SUCCESS = `${prefix}/CREATE_TEAM_SUCCESS`;
export const CREATE_TEAM_RECEIVE = `${prefix}/CREATE_TEAM_RECEIVE`;

export const RENAME_TEAM_REQUEST = `${prefix}/RENAME_TEAM_REQUEST`;
export const RENAME_TEAM_FAILURE = `${prefix}/RENAME_TEAM_FAILURE`;
export const RENAME_TEAM_SUCCESS = `${prefix}/RENAME_TEAM_SUCCESS`;
export const RENAME_TEAM_RECEIVE = `${prefix}/RENAME_TEAM_RECEIVE`;

export const CHANGE_TEAM_OPERATION = `${prefix}/CHANGE_TEAM_OPERATION`;

export const CHANGE_USERS_FILTER = `${prefix}/CHANGE_USERS_FILTER`;

export const ADD_USERS_TO_TEAMS_RECEIVE = `${prefix}/ADD_USERS_TO_TEAMS_RECEIVE`;

export const UPDATE_USERS_TO_TEAMS_RECEIVE = `${prefix}/UPDATE_USERS_TO_TEAMS_RECEIVE`;

export const ASSIGN_USER_TO_TEAM_REQUEST = `${prefix}/ASSIGN_USER_TO_TEAM_REQUEST`;
export const ASSIGN_USER_TO_TEAM_FAILURE = `${prefix}/ASSIGN_USER_TO_TEAM_FAILURE`;
export const ASSIGN_USER_TO_TEAM_SUCCESS = `${prefix}/ASSIGN_USER_TO_TEAM_SUCCESS`;

export const CHANGE_TEAM_SIZE_REQUEST = `${prefix}/CHANGE_TEAM_SIZE_REQUEST`;
export const CHANGE_TEAM_SIZE_FAILURE = `${prefix}/CHANGE_TEAM_SIZE_FAILURE`;

export const SELECT_USER_CHIP = `${prefix}/SELECT_USER_CHIP`;
export const UNSELECT_USERS_CHIPS = `${prefix}/UNSELECT_USERS_CHIPS`;
export const CHANGE_DRAG_USERS_CHIPS = `${prefix}/CHANGE_DRAG_USERS_CHIPS`;

export const REMOVE_TEAMS_REQUEST = `${prefix}/REMOVE_TEAMS_REQUEST`;
export const REMOVE_TEAMS_FAILURE = `${prefix}/REMOVE_TEAMS_FAILURE`;
// ?????????? ???????????????? ???? ???????????? ?????????????? ????????????????
export const REMOVE_TEAM_RECEIVE = `${prefix}/REMOVE_TEAM_RECEIVE`;

export const CHANGE_USER_ONLINE = `${prefix}/CHANGE_USER_ONLINE`;

export const CHANGE_AUTO_DISTRIBUTION = `${prefix}/CHANGE_AUTO_DISTRIBUTION`;

export const CHANGE_BROADCASTING_TYPE = `${prefix}/CHANGE_BROADCASTING_TYPE`;

//
// Block related constants
//

export const CREATE_BLOCK_REQUEST = `${prefix}/CREATE_BLOCK_REQUEST`;
export const CREATE_BLOCK_FAILURE = `${prefix}/CREATE_BLOCK_FAILURE`;
export const CREATE_BLOCK_RECEIVE = `${prefix}/CREATE_BLOCK_RECEIVE`;

export const COPY_BLOCK_REQUEST = `${prefix}/COPY_BLOCK_REQUEST`;
export const COPY_BLOCK_FAILURE = `${prefix}/COPY_BLOCK_FAILURE`;
export const COPY_BLOCK_RECEIVE = `${prefix}/COPY_BLOCK_RECEIVE`;
export const COPY_BLOCK_SUCCESS = `${prefix}/COPY_BLOCK_SUCCESS`;

export const UPDATE_BLOCK_REQUEST = `${prefix}/UPDATE_BLOCK_REQUEST`;
export const UPDATE_BLOCK_FAILURE = `${prefix}/UPDATE_BLOCK_FAILURE`;
export const UPDATE_BLOCK_RECEIVE = `${prefix}/UPDATE_BLOCK_RECEIVE`;

export const REMOVE_BLOCK_REQUEST = `${prefix}/REMOVE_BLOCK_REQUEST`;
export const REMOVE_BLOCK_FAILURE = `${prefix}/REMOVE_BLOCK_FAILURE`;
export const REMOVE_BLOCK_RECEIVE = `${prefix}/REMOVE_BLOCK_RECEIVE`;

// export const GET_BLOCKS_REQUEST = `${prefix}/GET_BLOCKS_REQUEST`;
export const GET_BLOCKS_SUCCESS = `${prefix}/GET_BLOCKS_SUCCESS`;
export const GET_BLOCKS_FAILURE = `${prefix}/GET_BLOCKS_FAILURE`;

export const DISTRIBUTE_USERS_REQUEST = `${prefix}/DISTRIBUTE_USERS_REQUEST`;
export const DISTRIBUTE_USERS_FAILURE = `${prefix}/DISTRIBUTE_USERS_FAILURE`;
export const DISTRIBUTE_USERS_SUCCESS = `${prefix}/DISTRIBUTE_USERS_SUCCESS`;

export const SORT_BLOCKS_REQUEST = `${prefix}/SORT_BLOCKS_REQUEST`;
export const SORT_BLOCKS_FAILURE = `${prefix}/SORT_BLOCKS_FAILURE`;
export const SORT_BLOCKS_RECEIVE = `${prefix}/SORT_BLOCKS_RECEIVE`;

export const COLLECT_BLOCKS_LAYOUT_CHANGES = `${prefix}/COLLECT_BLOCKS_LAYOUT_CHANGES`;
export const CLEAN_COLLECTED_BLOCKS_LAYOUT_CHANGES = `${prefix}/CLEAN_COLLECTED_BLOCKS_LAYOUT_CHANGES`;
export const CHANGE_BLOCK_LAYOUT_LOCALLY = `${prefix}/CHANGE_BLOCK_LAYOUT_LOCALLY`;

export const CHANGE_BLOCK_LAYOUT_REQUEST = `${prefix}/CHANGE_BLOCK_LAYOUT_REQUEST`;
export const CHANGE_BLOCK_LAYOUT_FAILURE = `${prefix}/CHANGE_BLOCK_LAYOUT_FAILURE`;
export const CHANGE_BLOCK_LAYOUT_RECEIVE = `${prefix}/CHANGE_BLOCK_LAYOUT_RECEIVE`;
export const CHANGE_WIDGET_LAYOUT = `${prefix}/CHANGE_WIDGET_LAYOUT`;

export const REMOVE_BLOCK_HIGHLIGHT = `${prefix}/REMOVE_BLOCK_HIGHLIGHT`;

export const GET_TIMERS_FAILURE = `${prefix}/GET_TIMERS_FAILURE`;
export const GET_TIMERS_SUCCESS = `${prefix}/GET_TIMERS_SUCCESS`;

export const CREATE_TIMER_RECEIVE = `${prefix}/CREATE_TIMER_RECEIVE`;

export const UPDATE_TIMER_REQUEST = `${prefix}/UPDATE_TIMER_REQUEST`;
export const UPDATE_TIMER_FAILURE = `${prefix}/UPDATE_TIMER_FAILURE`;
export const UPDATE_TIMER_RECEIVE = `${prefix}/UPDATE_TIMER_RECEIVE`;

export const CHANGE_TIMERS_TIME_REQUEST = `${prefix}/CHANGE_TIMERS_TIME_REQUEST`;
export const CHANGE_TIMERS_TIME_FAILURE = `${prefix}/CHANGE_TIMERS_TIME_FAILURE`;
export const CHANGE_TIMERS_TIME_RECEIVE = `${prefix}/CHANGE_TIMERS_TIME_RECEIVE`;

export const TOGGLE_TIMER_REQUEST = `${prefix}/TOGGLE_TIMER_REQUEST`;
export const TOGGLE_TIMER_FAILURE = `${prefix}/TOGGLE_TIMER_FAILURE`;
export const TOGGLE_TIMER_RECEIVE = `${prefix}/TOGGLE_TIMER_RECEIVE`;

export const FLUSH_TEAM_RELATED_BLOCKS = `${prefix}/FLUSH_TEAM_RELATED_BLOCKS`;
export const FLUSH_BLOCKS = `${prefix}/FLUSH_BLOCKS`;

//
// Constants related to sheets
//

export const ENTER_SHEET = `${prefix}/ENTER_SHEET`;
export const ENTER_SHEET_COMPLETE = `${prefix}/ENTER_SHEET_COMPLETE`;
export const LEAVE_SHEET = `${prefix}/LEAVE_SHEET`;
export const LEAVE_SHEET_COMPLETE = `${prefix}/LEAVE_SHEET_COMPLETE`;

export const CREATE_SHEET_REQUEST = `${prefix}/CREATE_SHEET_REQUEST`;
export const CREATE_SHEET_SUCCESS = `${prefix}/CREATE_SHEET_SUCCESS`;
export const CREATE_SHEET_FAILURE = `${prefix}/CREATE_SHEET_FAILURE`;
export const CREATE_SHEET_RECEIVE = `${prefix}/CREATE_SHEET_RECEIVE`;

export const RENAME_SHEET_REQUEST = `${prefix}/RENAME_SHEET_REQUEST`;
export const RENAME_SHEET_SUCCESS = `${prefix}/RENAME_SHEET_SUCCESS`;
export const RENAME_SHEET_FAILURE = `${prefix}/RENAME_SHEET_FAILURE`;

export const ADD_TEMP_SHEET = `${prefix}/ADD_TEMP_SHEET`;
export const REMOVE_TEMP_SHEET = `${prefix}/REMOVE_TEMP_SHEET`;

export const GET_SHEET_REQUEST = `${prefix}/GET_SHEET_REQUEST`;
export const GET_SHEET_SUCCESS = `${prefix}/GET_SHEET_SUCCESS`;
export const GET_SHEET_FAILURE = `${prefix}/GET_SHEET_FAILURE`;

export const GET_SHEETS_REQUEST = `${prefix}/GET_SHEETS_REQUEST`;
export const GET_SHEETS_SUCCESS = `${prefix}/GET_SHEETS_SUCCESS`;
export const GET_SHEETS_FAILURE = `${prefix}/GET_SHEETS_FAILURE`;

export const UPDATE_SHEET_REQUEST = `${prefix}/UPDATE_SHEET_REQUEST`;
export const UPDATE_SHEET_RECEIVE = `${prefix}/UPDATE_SHEET_RECEIVE`;
export const UPDATE_SHEET_FAILURE = `${prefix}/UPDATE_SHEET_FAILURE`;

export const REMOVE_SHEET_REQUEST = `${prefix}/REMOVE_SHEET_REQUEST`;
export const REMOVE_SHEET_RECEIVE = `${prefix}/REMOVE_SHEET_RECEIVE`;
export const REMOVE_SHEET_FAILURE = `${prefix}/REMOVE_SHEET_FAILURE`;

export const SORT_SHEETS_REQUEST = `${prefix}/SORT_SHEETS_REQUEST`;
export const SORT_SHEETS_FAILURE = `${prefix}/SORT_SHEETS_FAILURE`;
export const SORT_SHEETS_RECEIVE = `${prefix}/SORT_SHEETS_RECEIVE`;

export const UPDATE_ADAPTIVE = `${prefix}/UPDATE_ADAPTIVE`;

// export const COPY_SHEET = `${prefix}/COPY_SHEET`;
// export const MOVE_TO_SHEET = `${prefix}/MOVE_TO_SHEET`;

export const CHANGE_ALL_TEAMS_SELECTION = `${prefix}/CHANGE_ALL_TEAMS_SELECTION`;
export const SELECT_TEAMS = `${prefix}/SELECT_TEAMS`;
export const LEAVE_TEAMS = `${prefix}/LEAVE_TEAMS`;
export const SELECT_CHATS_WITH_TEAM = `${prefix}/SELECT_CHATS_WITH_TEAM`;

export const UPDATE_TEAM_RECEIVE = `${prefix}/UPDATE_TEAM_RECEIVE`;

export const SHOW_TEAMS_SETTINGS_DIALOG = `${prefix}/SHOW_TEAMS_SETTINGS_DIALOG`;
export const HIDE_TEAMS_SETTINGS_DIALOG = `${prefix}/HIDE_TEAMS_SETTINGS_DIALOG`;

//
// Widgets
//

export const GET_SHEET_WIDGETS_FAILURE = `${prefix}/GET_SHEET_WIDGETS_FAILURE`;
export const GET_SHEET_WIDGETS_SUCCESS = `${prefix}/GET_SHEET_WIDGETS_SUCCESS`;

export const CREATE_WIDGET_REQUEST = `${prefix}/CREATE_WIDGET_REQUEST`;
export const CREATE_WIDGET_FAILURE = `${prefix}/CREATE_WIDGET_FAILURE`;
export const CREATE_WIDGET_RECEIVE = `${prefix}/CREATE_WIDGET_RECEIVE`;
export const CREATE_WIDGET_SUCCESS = `${prefix}/CREATE_WIDGET_SUCCESS`;
export const BULK_CREATE_WIDGET_RECEIVE = `${prefix}/BULK_CREATE_WIDGET_RECEIVE`;

export const UPDATE_WIDGET_REQUEST = `${prefix}/UPDATE_WIDGET_REQUEST`;
export const UPDATE_WIDGET_FAILURE = `${prefix}/UPDATE_WIDGET_FAILURE`;
export const UPDATE_WIDGET_RECEIVE = `${prefix}/UPDATE_WIDGET_RECEIVE`;
export const UPDATE_WIDGET_SUCCESS = `${prefix}/UPDATE_WIDGET_SUCCESS`;

export const UPDATE_GOOGLE_DRIVE_WIDGET_REQUEST = `${prefix}/UPDATE_GOOGLE_DRIVE_WIDGET_REQUEST`;

export const REMOVE_WIDGET_REQUEST = `${prefix}/REMOVE_WIDGET_REQUEST`;
export const REMOVE_WIDGET_FAILURE = `${prefix}/REMOVE_WIDGET_FAILURE`;
export const REMOVE_WIDGET_RECEIVE = `${prefix}/REMOVE_WIDGET_RECEIVE`;

export const CLONE_WIDGETS_RECEIVE = `${prefix}/CLONE_WIDGETS_RECEIVE`;

export const CHANGE_TEXT_WIDGET_CONTENT = `${prefix}/CHANGE_TEXT_WIDGET_CONTENT`;
export const SAVE_TEXT_WIDGET_CONTENT = `${prefix}/SAVE_TEXT_WIDGET_CONTENT`;
export const CHANGE_TEXT_WIDGET_ALIGN = `${prefix}/CHANGE_TEXT_WIDGET_ALIGN`;

// export const UPLOAD_IMAGE_REQUEST = `${prefix}/UPLOAD_IMAGE_REQUEST`;

//
// Users content
//

export const GET_SHEET_USERS_CONTENT_FAILURE = `${prefix}/GET_SHEET_USERS_CONTENT_FAILURE`;
export const GET_SHEET_USERS_CONTENT_SUCCESS = `${prefix}/GET_SHEET_USERS_CONTENT_SUCCESS`;

export const CREATE_USERS_CONTENT_REQUEST = `${prefix}/CREATE_USERS_CONTENT_REQUEST`;
export const CREATE_USERS_CONTENT_FAILURE = `${prefix}/CREATE_USERS_CONTENT_FAILURE`;
export const CREATE_USERS_CONTENT_RECEIVE = `${prefix}/CREATE_USERS_CONTENT_RECEIVE`;
export const CREATE_USERS_CONTENT_SUCCESS = `${prefix}/CREATE_USERS_CONTENT_SUCCESS`;

export const UPDATE_USERS_CONTENT_REQUEST = `${prefix}/UPDATE_USERS_CONTENT_REQUEST`;
export const UPDATE_USERS_CONTENT_FAILURE = `${prefix}/UPDATE_USERS_CONTENT_FAILURE`;
export const UPDATE_USERS_CONTENT_RECEIVE = `${prefix}/UPDATE_USERS_CONTENT_RECEIVE`;
export const UPDATE_USERS_CONTENT_SUCCESS = `${prefix}/UPDATE_USERS_CONTENT_SUCCESS`;

export const CHANGE_CONTENT_EDITED_REQUEST = `${prefix}/CHANGE_CONTENT_EDITED_REQUEST`;

export const REMOVE_USERS_CONTENT_REQUEST = `${prefix}/REMOVE_USERS_CONTENT_REQUEST`;
export const REMOVE_USERS_CONTENT_FAILURE = `${prefix}/REMOVE_USERS_CONTENT_FAILURE`;
export const REMOVE_USERS_CONTENT_RECEIVE = `${prefix}/REMOVE_USERS_CONTENT_RECEIVE`;

export const REMOVE_ALL_USER_CONTENT_RECEIVE = `${prefix}/REMOVE_ALL_USER_CONTENT_RECEIVE`;

export const MOVE_USERS_CONTENT_REQUEST = `${prefix}/MOVE_USERS_CONTENT_REQUEST`;
export const MOVE_USERS_CONTENT_FAILURE = `${prefix}/MOVE_USERS_CONTENT_FAILURE`;
export const MOVE_USERS_CONTENT_RECEIVE = `${prefix}/MOVE_USERS_CONTENT_RECEIVE`;

export const CLONE_USERS_CONTENT_RECEIVE = `${prefix}/CLONE_USERS_CONTENT_RECEIVE`;

export const UPDATE_TASK_BLOCK_REQUEST = `${prefix}/UPDATE_TASK_BLOCK_REQUEST`;
export const UPDATE_TASK_BLOCK_FAILURE = `${prefix}/UPDATE_TASK_BLOCK_FAILURE`;

export const ADD_LIKE_REQUEST = `${prefix}/ADD_LIKE_REQUEST`;
export const ADD_LIKE_FAILURE = `${prefix}/ADD_LIKE_FAILURE`;

export const SORT_STICKER_BY_LIKE_REQUEST = `${prefix}/SORT_STICKER_BY_LIKE_REQUEST`;
export const SORT_STICKER_BY_LIKE_RECEIVE = `${prefix}/SORT_STICKER_BY_LIKE_RECEIVE`;
export const SORT_STICKER_BY_LIKE_FAILURE = `${prefix}/SORT_STICKER_BY_LIKE_FAILURE`;

export const ADD_HEADER_FOR_TASK_BLOCK = `${prefix}/ADD_HEADER_FOR_TASK_BLOCK`;

export const FLUSH_USERS_CONTENT = `${prefix}/FLUSH_USERS_CONTENT`;

export const GET_ALL_BLOCKS_REQUEST = `${prefix}/GET_ALL_BLOCKS_REQUEST`;
export const GET_ALL_BLOCKS_SUCCESS = `${prefix}/GET_ALL_BLOCKS_SUCCESS`;
export const GET_ALL_BLOCKS_FAILURE = `${prefix}/GET_ALL_BLOCKS_FAILURE`;

export const CONNECT_BLOCKS_REQUEST = `${prefix}/CONNECT_BLOCKS_REQUEST`;
export const CONNECT_BLOCKS_SUCCESS = `${prefix}/CONNECT_BLOCKS_SUCCESS`;
export const CONNECT_BLOCKS_FAILURE = `${prefix}/CONNECT_BLOCKS_FAILURE`;

export const CHANGE_PRESENTATION_PAGE_REQUEST = `${prefix}/CHANGE_PRESENTATION_PAGE_REQUEST`;
export const CHANGE_PRESENTATION_PAGE_SUCCESS = `${prefix}/CHANGE_PRESENTATION_PAGE_SUCCESS`;
export const CHANGE_PRESENTATION_PAGE_FAILURE = `${prefix}/CHANGE_PRESENTATION_PAGE_FAILURE`;

export const CHANGE_DRAWING_REQUEST = `${prefix}/CHANGE_DRAWING_REQUEST`;
export const CHANGE_DRAWING_FAILURE = `${prefix}/CHANGE_DRAWING_FAILURE`;
export const CHANGE_DRAWING_RECEIVE = `${prefix}/CHANGE_DRAWING_RECEIVE`;

export const REMOVE_DRAWING_REQUEST = `${prefix}/REMOVE_DRAWING_REQUEST`;
export const REMOVE_DRAWING_FAILURE = `${prefix}/REMOVE_DRAWING_FAILURE`;
export const REMOVE_DRAWING_RECEIVE = `${prefix}/REMOVE_DRAWING_RECEIVE`;

export const CREATE_TABLE_REQUEST = `${prefix}/CREATE_TABLE_REQUEST`;
export const CREATE_TABLE_SUCCESS = `${prefix}/CREATE_TABLE_SUCCESS`;

export const UPDATE_TABLE_REQUEST = `${prefix}/UPDATE_TABLE_REQUEST`;

export const LINKED_BLOCK_RECEIVE = `${prefix}/LINKED_BLOCK_RECEIVE`;

export const DISABLE_BROADCAST_REQUEST = `${prefix}/DISABLE_BROADCAST_REQUEST`;
export const DISABLE_BROADCAST_FAILURE = `${prefix}/DISABLE_BROADCAST_FAILURE`;

export const CHANGE_SIZES = `${prefix}/CHANGE_SIZES`;

export const BULK_DELETE_CONTENT_RECEIVE = `${prefix}/BULK_DELETE_CONTENT_RECEIVE`;

export const REFRESH_USER_PAGE_REQUEST = `${prefix}/REFRESH_USER_PAGE_REQUEST`;
export const REFRESH_USER_PAGE_FAILURE = `${prefix}/REFRESH_USER_PAGE_FAILURE`;

export const BIND_TEAM_OPTION_REQUEST = `${prefix}/BIND_TEAM_OPTION_REQUEST`;
export const BIND_TEAM_OPTION_FAILURE = `${prefix}/BIND_TEAM_OPTION_FAILURE`;

export const GET_ONLINE_USERS_REQUEST = `${prefix}/GET_ONLINE_USERS_REQUEST`;
export const GET_ONLINE_USERS_SUCCESS = `${prefix}/GET_ONLINE_USERS_SUCCESS`;
export const GET_ONLINE_USERS_FAILURE = `${prefix}/GET_ONLINE_USERS_FAILURE`;

export const INVOKE_USER_TO_SESSION_REQUEST = `${prefix}/INVOKE_USER_TO_SESSION_REQUEST`;
export const INVOKE_USER_TO_SESSION_SUCCESS = `${prefix}INVOKE_USER_TO_SESSION_SUCCESS`;
export const INVOKE_USER_TO_SESSION_FAILURE = `${prefix}/INVOKE_USER_TO_SESSION_FAILURE`;

export const GET_COURSE_FILTERED_USERS_REQUEST = `${prefix}/GET_COURSE_FILTERED_USERS_REQUEST`;
export const GET_COURSE_FILTERED_USERS_FAILURE = `${prefix}/GET_COURSE_FILTERED_USERS_FAILURE`;
export const GET_COURSE_FILTERED_USERS_SUCCESS = `${prefix}/GET_COURSE_FILTERED_USERS_SUCCESS`;

export const TOOGLE_WAIT_USER_BY_ADMIN = `${prefix}/TOOGLE_WAIT_USER_BY_ADMIN`;

export const ONLINE_USER_RECEIVE = `${prefix}/ONLINE_USER_RECEIVE`;

export const JOIN_TO_COURSE_USER_RECEIVE = `${prefix}/JOIN_TO_COURSE_USER_RECEIVE`;
export const LEAVE_FROM_COURSE_USER_RECEIVE = `${prefix}/LEAVE_FROM_COURSE_USER_RECEIVE`;

export const CHANGE_GOOGLE_DRIVE_LAYOUT_REQUEST = `${prefix}/CHANGE_GOOGLE_DRIVE_LAYOUT_REQUEST`;
export const CHANGE_GOOGLE_DRIVE_LAYOUT_FAILURE = `${prefix}/CHANGE_GOOGLE_DRIVE_LAYOUT_FAILURE`;

export const CHANGE_GOOGLE_DRIVE_LAYOUT_RECEIVE = `${prefix}/CHANGE_GOOGLE_DRIVE_LAYOUT_RECEIVE`;

export const UPDATE_QUESTION_REQUEST = `${prefix}/UPDATE_QUESTION_REQUEST`;
export const UPDATE_QUESTION_FAILURE = `${prefix}/UPDATE_QUESTION_FAILURE`;
export const UPDATE_QUESTION_RECEIVE = `${prefix}/UPDATE_QUESTION_RECEIVE`;

export const ADD_ANSWER_REQUEST = `${prefix}/ADD_ANSWER_REQUEST`;
export const ADD_ANSWER_FAILURE = `${prefix}/ADD_ANSWER_FAILURE`;
export const ADD_ANSWER_RECEIVE = `${prefix}/ADD_ANSWER_RECEIVE`;

export const CHANGE_ANSWER_CONTENT = `${prefix}/CHANGE_ANSWER_CONTENT`;

export const UPDATE_ANSWER_REQUEST = `${prefix}/UPDATE_ANSWER_REQUEST`;
export const UPDATE_ANSWER_FAILURE = `${prefix}/UPDATE_ANSWER_FAILURE`;
export const UPDATE_ANSWER_RECEIVE = `${prefix}/UPDATE_ANSWER_RECEIVE`;
export const CHANGE_QUESTION_CONTENT = `${prefix}/CHANGE_QUESTION_CONTENT`;

export const REMOVE_ANSWER_REQUEST = `${prefix}/REMOVE_ANSWER_REQUEST`;
export const REMOVE_ANSWER_FAILURE = `${prefix}/REMOVE_ANSWER_FAILURE`;
export const REMOVE_ANSWER_RECEIVE = `${prefix}/REMOVE_ANSWER_RECEIVE`;

export const SORT_ANSWER_REQUEST = `${prefix}/SORT_ANSWER_REQUEST`;
export const SORT_ANSWER_FAILURE = `${prefix}/SORT_ANSWER_FAILURE`;
export const SORT_ANSWER_RECEIVE = `${prefix}/SORT_ANSWER_RECEIVE`;

export const ADD_QUESTION_REQUEST = `${prefix}/ADD_QUESTION_REQUEST`;
export const ADD_QUESTION_FAILURE = `${prefix}/ADD_QUESTION_FAILURE`;
export const ADD_QUESTION_RECEIVE = `${prefix}/ADD_QUESTION_RECEIVE`;

export const GET_QUESTION_REQUEST = `${prefix}/GET_QUESTION_REQUEST`;
export const GET_QUESTION_FAILURE = `${prefix}/GET_QUESTION_FAILURE`;
export const GET_QUESTION_SUCCESS = `${prefix}/GET_QUESTION_SUCCESS`;

export const DELETE_QUESTION_REQUEST = `${prefix}/DELETE_QUESTION_REQUEST`;
export const DELETE_QUESTION_FAILURE = `${prefix}/DELETE_QUESTION_FAILURE`;
export const DELETE_QUESTION_SUCCESS = `${prefix}/DELETE_QUESTION_SUCCESS`;

export const SORT_QUESTION_REQUEST = `${prefix}/SORT_QUESTION_REQUEST`;
export const SORT_QUESTION_FAILURE = `${prefix}/SORT_QUESTION_FAILURE`;
export const SORT_QUESTION_SUCCESS = `${prefix}/SORT_QUESTION_SUCCESS`;

export const CHANGE_RATE_QUESTION_REQUEST = `${prefix}/CHANGE_RATE_QUESTION_REQUEST`;
export const CHANGE_RATE_QUESTION_FAILURE = `${prefix}/CHANGE_RATE_QUESTION_FAILURE`;
export const CHANGE_RATE_QUESTION_RECEIVE = `${prefix}/CHANGE_RATE_QUESTION_RECEIVE`;

export const DELETE_ALL_ANSWERS_RECEIVE = `${prefix}/DELETE_ALL_ANSWERS_RECEIVE`;

export const CHANGE_BLOCK_CONTENT = `${prefix}/CHANGE_BLOCK_CONTENT`;

export const START_TEST_REQUEST = `${prefix}/START_TEST_REQUEST`;
export const START_TEST_FAILURE = `${prefix}/START_TEST_FAILURE`;
export const START_TEST_SUCCESS = `${prefix}/START_TEST_SUCCESS`;

export const CHOOSE_ANSWER_REQUEST = `${prefix}/CHOOSE_ANSWER_REQUEST`;
export const CHOOSE_ANSWER_FAILURE = `${prefix}/CHOOSE_ANSWER_FAILURE`;
export const CHOOSE_ANSWER_RECEIVE = `${prefix}/CHOOSE_ANSWER_RECEIVE`;

export const SUBMIT_QUESTION_REQUEST = `${prefix}/SUBMIT_QUESTION_REQUEST`;
export const SUBMIT_QUESTION_FAILURE = `${prefix}/SUBMIT_QUESTION_FAILURE`;
export const SUBMIT_QUESTION_SUCCESS = `${prefix}/SUBMIT_QUESTION_SUCCESS`;

export const FINISH_TEST_REQUEST = `${prefix}/FINISH_TEST_REQUEST`;
export const FINISH_TEST_FAILURE = `${prefix}/FINISH_TEST_FAILURE`;
export const FINISH_TEST_SUCCESS = `${prefix}/FINISH_TEST_SUCCESS`;

export const GET_STATISTICS_REQUEST = `${prefix}/GET_STATISTICS_REQUEST`;
export const GET_STATISTICS_FAILURE = `${prefix}/GET_STATISTICS_FAILURE`;
export const GET_STATISTICS_SUCCESS = `${prefix}/GET_STATISTICS_SUCCESS`;

export const GET_QUESTION_STATISTICS_REQUEST = `${prefix}/GET_QUESTION_STATISTICS_REQUEST`;
export const GET_QUESTION_STATISTICS_FAILURE = `${prefix}/GET_QUESTION_STATISTICS_FAILURE`;
export const GET_QUESTION_STATISTICS_SUCCESS = `${prefix}/GET_QUESTION_STATISTICS_SUCCESS`;

export const GET_TEST_STATISTICS_SUCCESS = `${prefix}/GET_TEST_STATISTICS_SUCCESS`;

export const UPDATE_USER_TEST_STATISTICS_RECEIVE = `${prefix}/UPDATE_USER_TEST_STATISTICS_RECEIVE`;

export const UPDATE_ADMIN_QUESTION_STATISTIC_RECEIVE = `${prefix}/UPDATE_ADMIN_QUESTION_STATISTIC_RECEIVE`;

export const UPDATE_ADMIN_TEST_STATISTIC_RECEIVE = `${prefix}/UPDATE_ADMIN_TEST_STATISTIC_RECEIVE`;

export const DELETE_ALL_STATISTICS_RECEIVE = `${prefix}/DELETE_ALL_STATISTICS_RECEIVE`;

export const UPDATE_USER_QUESTION_STATISTIC_RECEIVE = `${prefix}/UPDATE_USER_QUESTION_STATISTIC_RECEIVE`;

export const CHANGE_USERNAME_REQUEST = `${prefix}/CHANGE_USERNAME_REQUEST`;
export const CHANGE_USERNAME_FAILURE = `${prefix}/CHANGE_USERNAME_FAILURE`;
export const CHANGE_USERNAME_SUCCESS = `${prefix}/CHANGE_USERNAME_SUCCESS`;

export const DISCONNECT_USER_RECEIVE = `${prefix}/DISCONNECT_USER_RECEIVE`;

export const UPDATE_REMOTE_USER_RECEIVE = `${prefix}/UPDATE_REMOTE_USER_RECEIVE`;

export const CHANGE_SELECTED_BLOCKS = `${prefix}/CHANGE_SELECTED_BLOCKS`;
export const CHANGE_SELECTED_BLOCKS_ALL = `${prefix}/CHANGE_SELECTED_BLOCKS_ALL`;
export const CHANGE_REMOVE_SELECTED_BLOCKS_ALL = `${prefix}/CHANGE_REMOVE_SELECTED_BLOCKS_ALL`;

export const PASTE_COPIED_BLOCKS = `${prefix}/PASTE_COPIED_BLOCKS`;

export const TOGGLE_PINNED_USER_REQUEST = `${prefix}/TOGGLE_PINNED_USER_REQUEST`;
export const TOGGLE_PINNED_USER_FAILURE = `${prefix}/TOGGLE_PINNED_USER_FAILURE`;
export const JOIN_PINNED_USER_RECEIVE = `${prefix}/JOIN_PINNED_USER_RECEIVE`;
export const LEAVE_PINNED_USER_RECEIVE = `${prefix}/LEAVE_PINNED_USER_RECEIVE`;

export const TOGGLE_SPEAKER_REQUEST = `${prefix}/TOGGLE_SPEAKER_REQUEST`;
export const TOGGLE_SPEAKER_FAILURE = `${prefix}/TOGGLE_SPEAKER_FAILURE`;
export const JOIN_SPEAKER_RECEIVE = `${prefix}/JOIN_SPEAKER_RECEIVE`;
export const LEAVE_SPEAKER_RECEIVE = `${prefix}/LEAVE_SPEAKER_RECEIVE`;

export const KICK_SPEAKER_REQUEST = `${prefix}/KICK_SPEAKER_REQUEST`;
export const KICK_SPEAKER_FAILURE = `${prefix}/KICK_SPEAKER_FAILURE`;
export const KICK_SPEAKER_RECEIVE = `${prefix}/KICK_SPEAKER_RECEIVE`;

export const CHANGE_WORKSPACE_WIDTH = `${prefix}/CHANGE_WORKSPACE_WIDTH`;
export const CHANGE_WORKSPACE_HEIGHT = `${prefix}/CHANGE_WORKSPACE_HEIGHT`;

export const MEDIA_SWITCHED_EVENT_REQUEST = `${prefix}/MEDIA_SWITCHED_EVENT_REQUEST`;
export const MEDIA_SWITCHED_EVENT_FAILURE = `${prefix}/MEDIA_SWITCHED_EVENT_FAILURE`;

export const ASK_USER_TO_STOP_SCREEN_SHARING = `${prefix}/ASK_USER_TO_STOP_SCREEN_SHARING`;
export const FINISH_STOP_SCREEN_SHARING_REQUEST = `${prefix}/FINISH_STOP_SCREEN_SHARING_REQUEST`;

export const PEERS_TOGGLE = `${prefix}/PEERS_TOGGLE`;
export const FLUSH_SELECTED_TEAM = `${prefix}/FLUSH_SELECTED_TEAM`;
export const SET_VIDEO_CHAT_OPEN = `${prefix}/SET_VIDEO_CHAT_OPEN`;
export const SET_MOVE_REMOVE_STICKER_ID = `${prefix}/SET_MOVE_REMOVE_STICKER_ID`;

export const VIDEO_CHAT_HEIGHT = Platform.OS === 'ios' ? 340 : 310;
export const CLOSED_VIDEO_CHAT_HEIGHT = Platform.OS === 'ios' ? 113 : 82;
