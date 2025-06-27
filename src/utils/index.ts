export interface ChangeClassValue {
  classToAdd: string;
  classToRemove: string;
}
export const changeClass = ({
  classToRemove,
  classToAdd,
}: ChangeClassValue): void => {
  // box.current.classList.remove(classToRemove);
  // box.current.classList.add('visible');
};
