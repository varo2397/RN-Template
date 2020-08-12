interface AsyncStorageResponse {
  success: boolean;
  error?: {
    message: string;
  };
  value?: {
    data: object | number | string | boolean | null;
  };
}
