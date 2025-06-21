declare const useModal: () => {
    open: boolean;
    close_modal: (f?: () => void) => void;
    open_modal: () => void;
};
export default useModal;
